import React from 'react';
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import LearnsContainer from './learnsContainer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger();

function learnReducer(state = {}, action) {
  switch(action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  learn: learnReducer
});

// initialize the Redux store
const store = createStore(rootReducer,
  {},
  applyMiddleware(thunk, logger)
);

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