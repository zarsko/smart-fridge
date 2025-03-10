/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.openfoodfacts.org', 'static.openfoodfacts.org'],
  },
};

module.exports = nextConfig; 