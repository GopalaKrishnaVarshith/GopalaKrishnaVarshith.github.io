import { MetadataRoute } from "next";
import { PROJECTS } from "./constants/projects";
import { generateSlug } from "@/lib/utils";
import { BASE_URL, IS_PUBLIC_SITE } from "./constants/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!IS_PUBLIC_SITE) return [];

  const staticUrls = [{ url: `${BASE_URL}/` }];
  const projectUrls = PROJECTS.map((project) => ({
    url: `${BASE_URL}/projects/${generateSlug(project.name)}`,
  }));

  return [...staticUrls, ...projectUrls];
}
