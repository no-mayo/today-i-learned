/* global firebase */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import style from './sass/style.scss';

const initialState = {
  learns: JSON.parse(window.localStorage.getItem('learns')) || {}
};
const logger = createLogger();

function learnsReducer(state = {}, action) {
  switch(action.type) {
    default:
      return state;
  }
}

function learnReducer(state = {}, action) {
  switch(action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  learns: learnsReducer,
  learn: learnReducer
});

// initialize the Redux store
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, logger)
);

console.log('store:', store);

// initialize Firebase
const fbConfig = {
  apiKey: "AIzaSyCAZmqm5ADWiJaS3RVrnyc9a9_6eJREwwg",
  authDomain: "today-i-learned-5e095.firebaseapp.com",
  databaseURL: "https://today-i-learned-5e095.firebaseio.com",
  projectId: "today-i-learned-5e095",
};
firebase.initializeApp(fbConfig);

// initialise React app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);