import React from 'react';
import ReactDOM from 'react-dom';
import style from './sass/style.scss';

const TodayILearned = require('./components/todayILearned');

// initialise React app
ReactDOM.render(
  <TodayILearned />,
  document.getElementById('app')
);