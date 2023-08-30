/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'pakar.stakcdn.com',
            port: '',
            pathname: '/app/assets/**',
          },
        ],
      },
}

module.exports = nextConfig
