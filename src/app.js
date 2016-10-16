import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

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
