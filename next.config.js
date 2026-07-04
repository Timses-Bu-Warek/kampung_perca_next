/** @type {import('next').NextConfig} */
const nextConfig = {
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

const siteUrl = process.env['BASE_URL'];

module.exports = {
  generateRobotsTxt: true,
  // tambahkan sitemap ke plugins
  plugins: [
    {
      options: {
        baseUrl: siteUrl,
      },
      resolve: 'next-sitemap',
    },
  ],
  siteUrl,
};

module.exports = nextConfig;
