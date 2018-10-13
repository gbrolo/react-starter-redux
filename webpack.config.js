// Defining rules for loaders
// babel-loader loads JSX/JS; css-loader loads and bundles CSS files into one css file
// style-loader adds all styles inside style tag of document
// NOTE: webpack executes loaders from last to first

const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['env']
              }
            },
          },
          {
            test: /\.js$/,
            enforce: 'pre',
            exclude: /node_modules/,
            use: {
              loader: 'eslint-loader',
              options: {
                configFile: __dirname + '/.eslintrc'
              }
            }
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          },
          {
            test: /\.scss$/,
            use: [ { loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" } ]
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  disable: true,
                }
              }
            ]
          }
        ]
      },
      plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
      ]
};