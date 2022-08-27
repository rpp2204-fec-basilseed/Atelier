const Dotenv = require('dotenv-webpack');
const path = require('path');
<<<<<<< HEAD
//const webpack = require('webpack');
=======
const webpack = require('webpack');
const dotEnv = require('dotenv-webpack');
>>>>>>> e97e9c54afab98282d3772211328f23cb9e457de

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
          },
        },
      },
      {
<<<<<<< HEAD
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
=======
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env', '@babel/preset-react'] },
      },
    ],
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    //   'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
    // })
    new dotEnv({
      ignoreStub: true,
    })
  ]
};

>>>>>>> e97e9c54afab98282d3772211328f23cb9e457de
