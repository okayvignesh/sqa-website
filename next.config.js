/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Emit a self-contained server bundle for the production Docker image.
  // Does not affect `next dev` or `next start`.
  output: 'standalone',
  // Don't advertise the framework in responses.
  poweredByHeader: false,
  // The MCP page moved from /agent to /mcp; keep old links working.
  async redirects() {
    return [
      { source: '/agent', destination: '/mcp', permanent: true },
      { source: '/agent/:path*', destination: '/mcp/:path*', permanent: true },
    ];
  },
  images: {
    // Serve modern formats first; Next falls back to the source format.
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

module.exports = nextConfig;
