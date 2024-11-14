/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jobizz.itechnolabs.tech",
      },
      {
        protocol: "https",
        hostname: "jobizzbucket.s3.eu-north-1.amazonaws.com",
      },
      {
        protocol: "http",
        hostname: "jobizz.itechnolabs.tech",
      },
    ],
  },
};

export default nextConfig;
