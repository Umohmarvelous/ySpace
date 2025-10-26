import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  "typescript": {
    ignoreBuildErrors: true
  },
experimental: {
    // Setting this to false forces Next.js to use the older, more reliable 
    // css-loader and minifier instead of the experimental Lightning CSS.
    optimizeCss: false, 
  },
};

export default nextConfig;