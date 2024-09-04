// next.config.js
module.exports = {
 images: {
   remotePatterns: [
     {
      protocol: 'http',
      hostname: 'localhost',
      port: '3001', // ใส่พอร์ตที่เซิร์ฟเวอร์รูปภาพใช้อยู่
      pathname: '/upload/images/**',
     },
   ],
 },
}
