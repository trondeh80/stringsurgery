const HtmlWebPackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postCssPipelineWebpackPlugin = require('postcss-pipeline-webpack-plugin');
const postcssCriticalSplit = require('postcss-critical-split');
const cssnano = require('cssnano');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'images/[hash]-[name].[ext]'
          }
        }]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader,
          'css-loader?sourceMap',
          'postcss-loader?sourceMap',
          'resolve-url-loader?sourceMap',
          'sass-loader?sourceMap']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].chunk.css',
      allChunks: true
    }),
    new postCssPipelineWebpackPlugin({
      predicate: name => /style.css$/.test(name),
      suffix: 'critical',
      pipeline: [
        postcssCriticalSplit({
          output: postcssCriticalSplit.output_types.CRITICAL_CSS
        }),
        cssnano({
          preset: 'default'
        })
      ]
    }),
    new postCssPipelineWebpackPlugin({
      predicate: name => /style.css$/.test(name),
      suffix: 'rest',
      pipeline: [
        postcssCriticalSplit({
          output: postcssCriticalSplit.output_types.REST_CSS
        }),
        cssnano({
          preset: ['default', {
            zindex: false
          }]
        })
      ]
    })
  ]
};
