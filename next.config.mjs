/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [["postcss-preset-env", {}]],
            },
          },
        },
        "resolve-url-loader",
        "sass-loader",
      ],
    });
    return config;
  },
};

export default nextConfig;
