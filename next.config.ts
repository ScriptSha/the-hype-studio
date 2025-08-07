import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: '/hype-studio-deploy/', // Replace with your GitHub repo name
  basePath: '/hype-studio-deploy',     // Same here
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
