/* eslint import/no-extraneous-dependencies:0 */
const webpack = require('webpack');
const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const forEach = require('lodash.foreach');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const config = require('./src/config');

const outputPath = path.join(__dirname, config.output.path);

const assetsPluginProcessOutput = function process(assets) {
  const results = {};

  forEach(assets, (chunk, key) => {
    forEach(chunk, (filename, ext) => {
      results[`${key}.${ext}`] = path.basename(filename);
    });
  });

  return JSON.stringify(results);
};

const webpackConfig = {
  context: path.resolve(config.context),
  entry: config.entry,
  output: {
    path: outputPath,
    publicPath: config.output.publicPath,
    filename: 'scripts/[name]_[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'eslint-loader',
          options: {
            failOnWarning: false,
            failOnError: true,
          },
        },
        enforce: 'pre',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
              },
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'images/[name]_[sha512:hash:base64:7].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
              },
              mozjpeg: {
                quality: 65,
              },
            },
          },
        ],
      },
      {
        test: /.*\.svg$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name]_[sha512:hash:base64:7].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules'],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles/[name]_[hash].css',
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new AssetsPlugin({
      path: './data',
      filename: 'assets.json',
      fullPath: false,
      processOutput: assetsPluginProcessOutput,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      sourceMap: true,
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true,
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'larsgraubner.com',
      filename: 'sw.js',
      minify: true,
      staticFileGlobs: ['static/**/*.{jpg,png,svg,ico,json}'],
      mergeStaticsConfig: true,
      stripPrefix: 'static',
      runtimeCaching: [
        {
          urlPattern: /fonts\.googleapis\.com/,
          handler: 'cacheFirst',
        },
        {
          urlPattern: /fonts\.gstatic\.com/,
          handler: 'cacheFirst',
        },
        {
          urlPattern: /twemoji\.maxcdn\.com/,
          handler: 'cacheFirst',
        },
        {
          urlPattern: /larsgraubner\.com.*\//,
          handler: 'networkFirst',
          options: {
            cache: {
              maxEntries: 20,
              name: 'runtime-cache',
            },
          },
        },
      ],
    }),
    new webpack.ContextReplacementPlugin(
      /highlight\.js\/lib\/languages$/,
      new RegExp(`^./(${['javascript'].join('|')})$`)
    ),
  ],
  target: 'web',
  devtool: 'cheap-module-source-map',
};

module.exports = webpackConfig;
