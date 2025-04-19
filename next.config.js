/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Lamech-CorporateSite',
  assetPrefix: '/Lamech-CorporateSite/',
  images: {
    unoptimized: true,
    domains: ['www.lamech.jp']
  },
}

module.exports = nextConfig 