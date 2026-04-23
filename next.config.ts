import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.rockty.com.br",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
