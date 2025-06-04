/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,       // Required for static export (no server-side image optimization) :contentReference[oaicite:6]{index=6}
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
    ],
  },
  output: 'export',          // Next.js will run `next build && next export` to produce `out/` :contentReference[oaicite:7]{index=7}
  trailingSlash: true,       // Ensures `/about/` → `out/about/index.html` (GitHub Pages expects folder-based routing) :contentReference[oaicite:8]{index=8}
  basePath: '/PortfolioVR',   // All asset URLs and links are prefixed with `/PortfolioVR` :contentReference[oaicite:9]{index=9}
};

module.exports = nextConfig;
