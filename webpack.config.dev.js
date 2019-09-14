import path from 'path';

export default{
  mode: "development",
  stats: "errors-only",

  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins:[],
  module: {
    rules: [
      {test: /\.js$/, include: [path.resolve(__dirname, '/node_modules/')], loader: ['babel-loader']},
      {test: /\.css$/, loader: ['style-loader', 'css']}
    ]
  }

}
