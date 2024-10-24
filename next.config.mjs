const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      type: "asset/resource", // Built-in support in Webpack 5
      generator: {
        filename: "static/pdf/[name][ext]", // Saves PDFs to 'static/pdf/'
      },
    });
    return config;
  },
};

export default nextConfig;
