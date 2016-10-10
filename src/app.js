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


console.debug('module is '+module.hot);
if(module.hot) {
  console.debug('module is hot');
  module.hot.accept('./test.js',() => {
    console.debug('accepting....');
    renderApp(require('./test.js').default,rootEl)
  });
};
