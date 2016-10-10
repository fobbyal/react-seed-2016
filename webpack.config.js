const { resolve }  =  require('path')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const entry = env => {
  if(env.prod) 
    return './app.js'
  return [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app.js',
  ]
}

const plugins = env => {
  const prodPlugs = [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: () => [autoprefixer]
      }
    }),
    new ProgressBarPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    })
  ]

  if(env.prod) 
    return prodPlugs

  return [
    ...prodPlugs,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

}

module.exports = env => ({
  entry: entry(env),
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    pathinfo: !env.prod,
  },
  context: resolve(__dirname,'src'),
  devtool: env.prod ? 'source-map' : 'eval', 
  bail: env.prod,
  module: {
    loaders: [
    { test: /\.js$/, loader:  'babel', exclude: /node_modules/ },
    { test: /\.css$/, 
      loader: ['style-loader','css-loader?modules',
    //{ test: /\.css$/, loader:  'style-loader!css-loader?modules&importLoaders=1!postcss-loader' },
      //'postcss-loader'
      ] },
    ]
  },
  plugins: plugins(env)
})
