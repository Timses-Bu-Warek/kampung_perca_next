/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pakar.stakcdn.com",
        port: "",
        pathname: "/app/assets/**",
      },
    ],
  },
};

const siteUrl = "https://kampungperca.id/";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  // tambahkan sitemap ke plugins
  plugins: [
    {
      resolve: "next-sitemap",
      options: {
        baseUrl: siteUrl,
      },
    },
  ],
};

module.exports = nextConfig;
