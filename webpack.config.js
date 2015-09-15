module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./main.js",
    html: "./index.html",
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["react-hot","babel-loader"] },
      { test: /\.html$/, loader: "file?name=[name].[ext]" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
