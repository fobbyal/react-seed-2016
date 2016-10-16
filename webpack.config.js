const { resolve }  =  require('path')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
//const ExtractTextPlugin = require('extract-text-webpack-plugin')

const entry = env => {
  if(env.prod) 
    return {
      app: './app.js',
      vendor: ['react','react-dom'],
    }

  return [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app.js',
  ]
}

const plugins = env => {
  const prodPlugs = [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]

  const commonPlugs = [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer]
      }
    }),
    new ProgressBarPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    })/*
       css extract text plugin for chunking  ,
    new ExtractTextPlugin({ filename: 'css/[name].css', disable: false, allChunks: true })
    */
  ]

  if(env.prod) 
    return [...prodPlugs,...commonPlugs]
      

  return [
    ...commonPlugs,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

}

const output = env => {
  const filename = env.prod?'bundle.[name].[chunkhash].js':'bundle.js'

  return {
    filename,
    path: resolve(__dirname, 'dist'),
    pathinfo: !env.prod,
  }
}

module.exports = env => ({
  entry: entry(env),
  output: output(env),
  context: resolve(__dirname,'src'),
  devtool: env.prod ? 'source-map' : 'eval', 
  bail: env.prod,
  module: {
    loaders: [
      { test: /\.js$/, loader:  'react-hot-loader/webpack!babel', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader' },
      /*
         loader:[ 
              'style-loader',
              { loader: 'css-loader', query: { modules: true, sourceMaps: true } },
              'postcss-loader'
              ]
      */
      /*
       * todo might wnat to use the following plugin for prorduction but not for the moment
      { test: /\.css$/, 
         loader: ExtractTextPlugin.extract({
              fallbackLoader: 'style-loader',
              loader: [
                  { loader: 'css-loader', query: { modules: true, sourceMaps: true } },
                  //'postcss-loader'
              ]
          })
      },*/
    ]
  },
  plugins: plugins(env)
})
