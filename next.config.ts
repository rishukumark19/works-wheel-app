import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/works-wheel-app",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
