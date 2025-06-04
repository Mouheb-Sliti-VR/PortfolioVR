/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,            // Enables the new App Router feature in Next.js
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,       // This disables Next.js built-in image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
    ],
  },
  trailingSlash: true,       // Adds trailing slash for all routes
  basePath: '/PortfolioVR',  // Prefix all URLs with /PortfolioVR
  // REMOVE output: 'export' since it conflicts with App Router usage
};

module.exports = nextConfig;
