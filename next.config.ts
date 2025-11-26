import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ["raw-loader"],
    });

    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
  turbopack: {},
};

export default nextConfig;
