import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Header from './components/Header'
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import {getCollections} from './actions/index'

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

store.dispatch(getCollections())

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <App />
  </Provider>,
  document.getElementById('root'));
  
serviceWorker.unregister();
