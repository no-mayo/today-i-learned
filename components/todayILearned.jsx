import React from 'react';
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import LearnsContainer from './learnsContainer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

// This module represents the entire Today I Learned app. It applies the Redux
// store to the app so that we can use it to handle state.

// So first, we create the Redux things that we need.

// A logger, to log things
const logger = createLogger();

// This reducer allows us to modify the state of a user's learns
function learnReducer(state = {}, action) {
  switch(action.type) {
    default:
      return state;
  }
}

// We have to combine our reducers (one day there might be more than one)
const rootReducer = combineReducers({
  learn: learnReducer
});

// initialize the Redux store
const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));

// here's the component module for the view
class TodayILearned extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <LearnsContainer />
      </Provider>
    );
  }
}

module.exports = TodayILearned;