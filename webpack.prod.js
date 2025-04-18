const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  performance: {
    maxEntrypointSize: 90000,
    maxAssetSize: 900000,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  plugins: [new CleanWebpackPlugin()],
});
