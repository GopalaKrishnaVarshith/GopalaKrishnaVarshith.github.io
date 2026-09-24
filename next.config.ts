import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  agentRules: false,
  images: { unoptimized: true },
  turbopack: { root: process.cwd() },
};

export default nextConfig;
