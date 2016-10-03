import React from 'react'
import ReactDOM from 'react-dom'
import css from './test.css'
import { AppContainer } from 'react-hot-loader'
//import Test from './test.js'

const rootEl = document.getElementById('root')

const renderApp= (Content,element) => {
  ReactDOM.render(
      <AppContainer>
        <Content/>
      </AppContainer>
      ,element)
}

renderApp(require('./test.js').default,rootEl)


if(module.hot) {
  module.hot.accept('./test.js',() => {
    renderApp(require('./test.js').default,rootEl)
  });
};
