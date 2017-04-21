/* global firebase */

import React from 'react';
import ReactDOM from 'react-dom';
import style from './sass/style.scss';

// initialize Firebase
var config = {
  apiKey: "AIzaSyCAZmqm5ADWiJaS3RVrnyc9a9_6eJREwwg",
  authDomain: "today-i-learned-5e095.firebaseapp.com",
  databaseURL: "https://today-i-learned-5e095.firebaseio.com",
  projectId: "today-i-learned-5e095",
  storageBucket: "today-i-learned-5e095.appspot.com",
  messagingSenderId: "691472609212"
};
firebase.initializeApp(config);

var TodayILearned = require('./components/todayILearned');

// initialise React app
ReactDOM.render(
  <TodayILearned />,
  document.getElementById('app')
);