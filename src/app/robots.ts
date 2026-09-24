import type { MetadataRoute } from "next";
import { BASE_URL, IS_PUBLIC_SITE } from "./constants/data";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  if (!IS_PUBLIC_SITE) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
