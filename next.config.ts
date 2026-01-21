import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   reactStrictMode: true,
  
  // If you need to ignore ESLint/TypeScript during builds,
  // use this approach instead:
  
  // For ignoring ESLint: Create .eslintrc.json instead
  // For ignoring TypeScript errors during build, use:
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Optional: Image optimization config
  images: {
    domains: [], // Add your image domains here if needed
  },
};

export default nextConfig;
