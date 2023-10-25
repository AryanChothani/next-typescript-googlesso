const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: ''
      }
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    CONTENTFUL_ACCESS_TOKEN: "o5p-U_OOTprN3DxoUFF_ApXTiy7PtPAWjlCjY8C0ix4",
    CONTENTFUL_SPACE_ID: "9tz779odn5ev",
    CLIENT_ID: "903070974765-9hmp5uq4os5m6ifl86nor05mkf0jqt7c.apps.googleusercontent.com",
    CLIENT_SECRET: "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",
    NEXTAUTH_SECRET: "Hellisuhiurdgi"
  },
}
