const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: 'eval-source-map',
  entry: "./src/index.js", //entery of our code
  output: {
    path: path.resolve(__dirname, "./static/frontend"), //output path
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true, //take our js and make it smaller --like getting rid of whitespaes
  },
  plugins: [
    new webpack.DefinePlugin({ //this is doing some sort of optimization
       
      //'process.env.NODE_ENV' : JSON.stringify('production')
      'process.env.NODE_ENV' : JSON.stringify('development')
      /*"process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("production"),
      },*/
    }),
  ],
};