const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/[name].bundle.js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    compress: true,
    open: true,
    hot: true,
    port: 9000,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
    }),
    new WebpackBundleAnalyzer({
      openAnalyzer: false,
      analyzerPort: 8000,
    }),
  ],
});
