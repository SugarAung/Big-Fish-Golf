import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Required for static export — no server-side image processing
  images: { unoptimized: true },
};

export default nextConfig;
