const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { StatsWriterPlugin } = require("webpack-stats-plugin");
const { BundleStatsWebpackPlugin } = require("bundle-stats-webpack-plugin");

const CONTEXT = path.join(__dirname, "src");
const DIST = path.join(__dirname, "dist");

module.exports = (_, { mode }) => ({
  context: CONTEXT,
  entry: {
    app: "./index.jsx",
  },
  output: {
    path: DIST,
    filename: mode === "production" ? "[name].[contenthash:8].js" : "[name].js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: mode === "production",
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.(jpg|png|gif|webp|svg)$/,
        loader: "file-loader",
        options: {
          name:
            mode === "production"
              ? "[path][name].[contenthash:8].[ext]"
              : "[path][name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: "index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename:
        mode === "production" ? "[name].[contenthash:8].css" : "[name].css",
    }),
    new BundleStatsWebpackPlugin({
      outDir: "../artifacts",
      stats: {
        excludeAssets: [/artifacts/],
      },
    }),
    new StatsWriterPlugin({
      filename: "../artifacts/webpack-stats.json",
      stats: {
        all: true,
        source: false,
      },
    }),
  ],
  optimization: {
    runtimeChunk: {
      name: "runtime",
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true,
        },
      },
    },
  },
});
