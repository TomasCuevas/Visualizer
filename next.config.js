/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["plus.unsplash.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
