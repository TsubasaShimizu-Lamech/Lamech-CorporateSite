/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Lamech-CorporateSite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Lamech-CorporateSite/' : '',
  images: {
    unoptimized: true,
    domains: ['www.lamech.jp']
  },
}

module.exports = nextConfig 