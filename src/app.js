import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

/* eslint-disable import/no-unresolved */
require('!!style-loader!css-loader!normalize.css/normalize.css')
/* eslint-enable import/no-unresolved */

const rootEl = document.getElementById('root')

const renderApp= (Content,element) => {
  ReactDOM.render(
      <AppContainer>
        <Content/>
      </AppContainer> ,
      element)
}

const loadApp = () =>  renderApp(require('./container/Dashboard.js').default,rootEl)

loadApp()

if(module.hot) {
  module.hot.accept('./container/Dashboard.js',() => {
    loadApp()
  })
}
