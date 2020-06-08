const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // string | object | array
  // defaults to ./src
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, "dist"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "index.[contenthash].js", // string
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "嘤嘤嘤",
      template: "src/assets/index.html",
    }),
  ],
};
