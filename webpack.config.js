const path = require('path');
const webpack = require('webpack');

const bundlePath = path.resolve(__dirname, 'dist/');

module.exports = {
  entry: './src/index.jsx',
  output: {
    publicPath: bundlePath,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  devtool: 'sourcemap',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
