/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    domains: ["api.dicebear.com"], // ✅ Add dicebear domain
  },
};

export default nextConfig;

// import path from 'path';
// import { fileURLToPath } from 'url';

// // Create __dirname equivalent for ES modules
// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['api.dicebear.com'],
//   },
//   webpack: (config) => {
//     // Fix for Three.js using ES modules syntax
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       three: path.resolve(__dirname, 'node_modules/three'),
//       '@react-three/fiber': path.resolve(__dirname, 'node_modules/@react-three/fiber')
//     };
//     return config;
//   }
// };

// export default nextConfig;