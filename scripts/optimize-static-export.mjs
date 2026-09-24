import { promises as fs } from "node:fs";
import path from "node:path";

const outputRoot = path.resolve("out");
const htmlFiles = [];
const cssCache = new Map();
const imageCache = new Map();
let inlinedStylesheets = 0;
let inlinedImages = 0;
let removedScripts = 0;
let removedPreloads = 0;

async function collectHtmlFiles(directory) {
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) await collectHtmlFiles(entryPath);
    else if (entry.isFile() && entry.name.endsWith(".html"))
      htmlFiles.push(entryPath);
  }
}

async function loadStylesheet(href) {
  if (cssCache.has(href)) return cssCache.get(href);
  const assetPath = path.join(
    outputRoot,
    decodeURIComponent(href.split("?")[0]).replace(/^\/+/, ""),
  );
  const css = await fs.readFile(assetPath, "utf8");
  cssCache.set(href, css);
  return css;
}

async function loadImageDataUri(src) {
  if (imageCache.has(src)) return imageCache.get(src);
  const assetPath = path.join(
    outputRoot,
    decodeURIComponent(src.split("?")[0]).replace(/^\/+/, ""),
  );
  const extension = path.extname(assetPath).toLowerCase();
  const mimeTypes = {
    ".avif": "image/avif",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
  };
  const mimeType = mimeTypes[extension];
  if (!mimeType) return null;
  const image = await fs.readFile(assetPath);
  const dataUri = `data:${mimeType};base64,${image.toString("base64")}`;
  imageCache.set(src, dataUri);
  return dataUri;
}

await collectHtmlFiles(outputRoot);

for (const htmlPath of htmlFiles) {
  let html = await fs.readFile(htmlPath, "utf8");
  const stylesheetPattern =
    /<link\b(?=[^>]*\brel="stylesheet")(?=[^>]*\bhref="([^"]+)")[^>]*\/?>/g;
  const stylesheetLinks = [...html.matchAll(stylesheetPattern)];

  for (const link of stylesheetLinks) {
    const href = link[1];
    const css = (await loadStylesheet(href)).replace(/<\/style/gi, "<\\/style");
    html = html.replace(
      link[0],
      `<style data-inline-stylesheet="${path.basename(href)}">${css}</style>`,
    );
    inlinedStylesheets += 1;
  }

  const localImageSources = [
    ...new Set(
      [...html.matchAll(/<img\b[^>]*\bsrc="(\/(?!_next\/)[^"]+)"/g)].map(
        (match) => match[1],
      ),
    ),
  ];

  for (const src of localImageSources) {
    const dataUri = await loadImageDataUri(src);
    if (!dataUri) continue;
    html = html.replaceAll(`src="${src}"`, `src="${dataUri}"`);
    inlinedImages += 1;
  }

  html = html.replace(
    /<link\b(?=[^>]*\brel="preload")(?=[^>]*\bas="script")[^>]*\/?>/g,
    () => {
      removedPreloads += 1;
      return "";
    },
  );

  html = html.replace(
    /<link\b(?=[^>]*\brel="preload")(?=[^>]*\bas="image")(?=[^>]*\bhref="\/(?!_next\/)[^"]+")[^>]*\/?>/g,
    () => {
      removedPreloads += 1;
      return "";
    },
  );

  html = html.replace(
    /<script\b[^>]*\bsrc="\/_next\/static\/[^"]+"[^>]*><\/script>/g,
    () => {
      removedScripts += 1;
      return "";
    },
  );

  html = html.replace(
    /<script>(?:\(self\.__next_f=self\.__next_f\|\|\[\]\)\.push|self\.__next_f\.push)\([\s\S]*?<\/script>/g,
    () => {
      removedScripts += 1;
      return "";
    },
  );

  html = html.replace('<div hidden=""><!--$--><!--/$--></div>', "");

  if (
    /<script\b[^>]*\bsrc="\/_next\/static\//.test(html) ||
    html.includes("self.__next_f") ||
    /<link\b[^>]*\brel="stylesheet"/.test(html)
  ) {
    throw new Error(`Static optimization incomplete for ${htmlPath}`);
  }

  await fs.writeFile(htmlPath, html);
}

console.log(
  JSON.stringify(
    {
      htmlFiles: htmlFiles.length,
      inlinedStylesheets,
      inlinedImages,
      removedScripts,
      removedPreloads,
    },
    null,
    2,
  ),
);
