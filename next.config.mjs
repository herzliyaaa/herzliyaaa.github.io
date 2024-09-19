/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    trailingSlash: true, // Optional for clean URLs
    images: {
      unoptimized: true, // Disable image optimization, which GitHub Pages doesn’t support
    },
};

export default nextConfig;
