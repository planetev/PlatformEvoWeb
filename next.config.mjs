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
      },
    ],
  },
};

export default nextConfig;
