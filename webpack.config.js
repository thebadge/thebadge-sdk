// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.ts',
  },
  module: {
    rules: [
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        include: path.resolve(__dirname, './src/assets'),
        loader: 'file-loader?name=assets/[name].[ext]',
      },
    ],
  },
  resolve: {
    alias: {
      '@businessLogic': path.resolve(__dirname, './src/business-logic/*'),
      '@subgraph': path.resolve(__dirname, './src/subgraph/*'),
      '@utils': path.resolve(__dirname, './src/utils/*'),
    },
  },
}
