const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.tsx",
  output: { path: path.resolve(__dirname, "dist"), filename: "bundle.js" },
  resolve: { extensions: [".js", ".jsx", ".json", ".ts", ".tsx"] },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, loader: "ts-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        // CSS Loader
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        // Assets loader
        // More information here https://webpack.js.org/guides/asset-modules/
        test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg|eot|ttf|woff|woff2)$/i,
        type: 'asset'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
};
