import React from 'react';
import ReactDOM from 'react-dom';
import style from './sass/style.scss';
import NewLearnForm from './components/newLearnForm';
import LearnsList from './components/learnsList';

// initialise React app
ReactDOM.render(
  <div>
    <NewLearnForm />
    <LearnsList/>
  </div>,
  document.getElementById('app')
);