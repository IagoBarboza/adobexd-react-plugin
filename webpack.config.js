module.exports = {
  entry: './src/main.jsx',
  output: {
    path: __dirname,
    filename: 'main.js',
    libraryTarget: 'commonjs2'
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/plugin-transform-react-jsx']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  externals: {
    scenegraph: 'scenegraph'
  }
}
