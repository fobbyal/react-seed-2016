/*eslint no-console: "allow" */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config.js')({prod:false});

const host = process.argv.length>2 ? process.argv[2]:'localhost'
const port = process.argv.length>3 ? process.argv[3]:'3000'


new WebpackDevServer(webpack(config), {
  //publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true
  }, 
  historyApiFallback: true
}).listen(port, host, (err, result) => {
  if (err) {
    return console.log(err)
  }
  console.log(`Listening at http://${ host }:${ port }/`)
})
