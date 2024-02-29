/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        port: "5050",
      },
    ],
  },
};

export default nextConfig;
