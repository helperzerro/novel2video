/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1198",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
