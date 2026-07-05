import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
