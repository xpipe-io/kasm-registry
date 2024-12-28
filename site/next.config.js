/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'XPipe Webtop',
    description: 'https://github.com/xpipe-io/xpipe-webtop',
    icon: 'https://xpipe.io/logo.svg',
    listUrl: 'https://kasm.xpipe.io',
    contactUrl: 'https://xpipe.io',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
