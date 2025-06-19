/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'cdn.shopify.com',
      'images.unsplash.com',
      'd1tnk6mbnurvod.cloudfront.net'
    ],
  },
  
  // Enable CSS and SASS modules
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  // Configure webpack
  webpack: (config, { isServer }) => {
    // Important: return the modified config
    return config;
  },
  // Environment variables
  env: {
    // Add any environment variables here
  },
};

module.exports = nextConfig;
