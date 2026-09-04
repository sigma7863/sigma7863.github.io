import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true
  },
  output: 'export',
  turbopack: {
    root: process.cwd()
  }
};

export default nextConfig;
