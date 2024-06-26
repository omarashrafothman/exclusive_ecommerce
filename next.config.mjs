/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

// module.exports = {
//   webpack(config, options) {
//     // Example of an incorrect generator configuration
//     config.module.rules.push({
//       test: /\.(png|jpe?g|gif|svg)$/i,
//       type: "asset/resource",
//       generator: {
//         filename: "static/media/[name].[hash][ext]", // This is incorrect
//       },
//     });

//     // Correct approach without using `filename` in generator
//     config.module.rules.push({
//       test: /\.(png|jpe?g|gif|svg)$/i,
//       type: "asset/resource",
//       // No generator.filename, use output options instead
//     });

//     return config;
//   },
// };
