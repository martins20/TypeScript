const path = require('path'); //eslint-disable-line

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: ['tsconfig.frontend.json'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend', 'assets', 'js'),
    // path: path.resolve(__dirname, 'dist' ), //For backend
  },
  devtool: 'source-map',
};
