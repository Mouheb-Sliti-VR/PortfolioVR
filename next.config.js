/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // 👍 okay for dev, but reconsider for production later
  },
  eslint: {
    ignoreDuringBuilds: true, // same — good for now if you're focusing on rapid iteration
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**', // no need for port if empty
      },
    ],
    // Optional: Disable optimization in dev to avoid TLS/self-signed errors
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

module.exports = nextConfig;
