import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "flexible-pony-134.convex.cloud", protocol: "https" }
    ],
  },
};

export default nextConfig;
