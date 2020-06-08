const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const base = require("./webpack.config.base.js");

module.exports = {
  ...base,
  mode: "development", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,

        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
