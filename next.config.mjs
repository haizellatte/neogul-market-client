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
      {
        hostname:
          "port-0-time-attack-fullstack-server-17xco2lltdolaae.sel5.cloudtype.app",
      },
    ],
  },
};

export default nextConfig;
