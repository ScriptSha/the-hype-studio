import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: '/the-hype-studio/', // Replace with your GitHub repo name
  basePath: '/the-hype-studio',     // Same here
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
