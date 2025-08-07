import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: isProd ? '/the-hype-studio/' : '',
  basePath: isProd ? '/the-hype-studio' : '',
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
