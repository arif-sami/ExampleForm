const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";
const target = "web";

if (isProduction) {
  target = "browserslist";
}

module.exports = {
  mode: isProduction ? "production" : "development",
  target,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [{ loader: MiniCssExtractPlugin.loader, options: { publicPath: "" } }, "css-loader", "postcss-loader", "sass-loader"],
      },

      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  devtool: false,
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};
//..
