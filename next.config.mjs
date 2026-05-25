import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    localPatterns: [
      {
        pathname: '/**',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**', // This allows all paths from this hostname
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**', // This allows all paths from this hostname
      },
      {
        protocol: 'https',
        hostname: 'flowbite.com',
        port: '',
        pathname: '/**', // This allows all paths from this hostname
      },
      {
        protocol: 'https',
        hostname: 'flowbite.s3.amazonaws.com',
        port: '',
        pathname: '/**', // This allows all paths from this hostname
      },
    ],
  },
}

export default nextConfig;
