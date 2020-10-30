import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage'
import App from './components/App'
import reducers from './reducers'

const enhancer = compose(
    applyMiddleware(thunk),
    persistState(null, null),
  )
const store = createStore(reducers, enhancer);

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>
    , document.querySelector('#root')
);