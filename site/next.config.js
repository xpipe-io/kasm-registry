/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'XPipe',
    description: 'Workspaces for the XPipe Webtop images.',
    icon: 'https://xpipe.io/logo_padded.svg',
    listUrl: 'https://kasm.xpipe.io/',
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
