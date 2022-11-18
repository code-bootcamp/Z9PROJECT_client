/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  // disable: process.env.NODE_ENV == "development",
});
// import withPlugins from "next-compose-plugins";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
};

// module.exports = nextConfig;
// module.exports = withPlugins(
//   [
//     [
//       withPWA,
//       {
//         pwa: {
//           dest: "public",
//         },
//       },
//     ],
//     // More Plugin
//   ],
//   nextConfig
// );
module.exports = withPWA();
