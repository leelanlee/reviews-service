const path = require('path');
var SRC_DIR = path.join(__dirname, 'client/src/index.jsx');

module.exports = {
  mode: 'development',
  entry: SRC_DIR,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/public'),
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.m?js|jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
  },
};
