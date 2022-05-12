const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/scripts/app/app.js",
    binarySearch: "./src/scripts/searching/binarySearch.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:8].js",
    chunkFilename: "[id].[hash:8].js",
    clean: true,
  },

  // devtool: "inline-source-map",
  // devServer: {
  //   contentBase: path.join(__dirname, "dist"),
  //   open: true,
  //   watchContentBase: true,
  // },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },

  plugins: [
    new htmlWebpackPlugin({
      template: "./src/pages/app.html",
      filename: "index.html",
      chunks: ["app"],
    }),

    new htmlWebpackPlugin({
      template: "./src/pages/binarySearch.html",
      filename: "binarySearch.html",
      chunks: ["binarySearch"],
    }),
  ],
};
