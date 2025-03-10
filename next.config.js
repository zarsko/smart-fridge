/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.openfoodfacts.org', 'static.openfoodfacts.org'],
  },
  webpack: (config, { isServer }) => {
    // For Firebase
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        dns: false,
        child_process: false,
        http2: false,
      };
    }
    
    // Add rule for Firebase
    config.module = {
      ...config.module,
      exprContextCritical: false,
    };
    
    return config;
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
  }
};

module.exports = nextConfig; 