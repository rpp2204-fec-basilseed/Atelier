const path = require('path');
const dotEnv = require('dotenv-webpack');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "/client/src/index.jsx"),
  output: {
    filename: ("bundle.js"),
    path: path.join(__dirname, "/client/dist/"),
  },
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
    ],
  },
  plugins: [
    new dotEnv({
      ignoreStub: true,
    })
  ],
};