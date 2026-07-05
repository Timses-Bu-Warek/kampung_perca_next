import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        hostname: 'pakuanraya.com',
        pathname: '/wp-content/uploads/**',
        port: '',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
