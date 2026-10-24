import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
<<<<<<< HEAD
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
        pathname: "/**",
      },
    ],
  }
=======
  output: "export",
  images: {
    unoptimized: true,
  },
>>>>>>> e5383e6cad8db3c818b99e67df5a95aea89f6447
};



 



export default nextConfig;
