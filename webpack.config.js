const Dotenv = require('dotenv-webpack');
const path = require('path');
//const webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "/client/src/index.jsx"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/client/dist/"),
  },
  // plugins: [
  //   new Dotenv()，
  // ],
  module: {
    rules: [
      {
        test: /\.(jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
          }
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  // resolve: {
  //   fallback: {
  //     "os": false,
  //     "path": false,
  //   },
  // },
};