import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'ir.ozone.ru',
      },
       {
        protocol: 'https',
        hostname: 'julienflorkin.com',
      },
    ],
  },
};

export default nextConfig;
