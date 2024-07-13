/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'freepngtransparent.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
