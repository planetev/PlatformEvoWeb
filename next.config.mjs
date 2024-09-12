/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/pnev",
  assetPrefix: "/pnev",
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "137.59.112.61",
        port: "3001", // ใส่พอร์ตที่เซิร์ฟเวอร์รูปภาพใช้อยู่
        pathname: "/upload/images/**",
      },
    ],
  },
};

export default nextConfig;
