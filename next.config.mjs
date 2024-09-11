/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/evp",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001", // ใส่พอร์ตที่เซิร์ฟเวอร์รูปภาพใช้อยู่
        pathname: "/upload/images/**",
      },
    ],
  },
};

export default nextConfig;
