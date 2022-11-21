/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
<<<<<<< HEAD
  // disable: process.env.NODE_ENV == "development",
});
// import withPlugins from "next-compose-plugins";
=======
});
>>>>>>> develop

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
};
<<<<<<< HEAD

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
=======

module.exports = nextConfig;

>>>>>>> develop
module.exports = withPWA();
