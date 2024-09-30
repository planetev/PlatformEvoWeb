/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/pnev",
  assetPrefix: "/pnev",
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "platform.planet-ev.com",
        port: "8443", // ใส่พอร์ตที่เซิร์ฟเวอร์รูปภาพใช้อยู่
        pathname: "/ev/upload/images/**",
      }
      // {
      //   protocol: "http",
      //   hostname: "localhost",
      //   port: "3001", // ใส่พอร์ตที่เซิร์ฟเวอร์รูปภาพใช้อยู่
      //   pathname: "/upload/images/**",
      // }
    ],
  },
};

export default nextConfig;
