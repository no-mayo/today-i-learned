console.log('index.js');

import React from 'react';
import ReactDOM from 'react-dom';
import style from './sass/style.scss';

const element = (
  <form className="new-thing-learned">
    <input type="text" placeholder="advanced mathematics" required/>
    <input type="submit" value="Save"/>
  </form>
);

ReactDOM.render(
  element,
  document.getElementById('app')
);