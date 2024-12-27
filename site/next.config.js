/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'XPipe Webtop',
    description: 'https://github.com/xpipe-io/xpipe-webtop',
    icon: 'https://xpipe.io/favicon.ico',
    listUrl: 'https://xpipe-io.github.io/kasm-registry',
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
