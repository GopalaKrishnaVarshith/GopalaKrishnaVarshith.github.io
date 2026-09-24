import { MetadataRoute } from "next";
import { PROJECTS } from "./constants/projects";
import { generateSlug } from "@/lib/utils";
import { BASE_URL } from "./constants/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
  const projectUrls = PROJECTS.map((project) => ({
    url: `${BASE_URL}/projects/${generateSlug(project.name)}/`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticUrls, ...projectUrls];
}
