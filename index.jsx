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

class NewLearnForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {newLearn: ''};

    // this binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.submitNewLearn = this.submitNewLearn.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      newLearn: event.target.value
    });
  }

  submitNewLearn(event) {
    event.preventDefault();
    if (this.state.newLearn && this.state.newLearn.length > 0) {
      this.saveLearn({
        createdAt: Date.now(),
        learn: this.state.newLearn
      });
      this.setState({newLearn: ''});
    } else {
      console.error('No new learn submitted');
    }
  }
  
  randomLearn() {
    // we could have any number of random learning prompts for our input field
    let learns = ['Pythagoras\' theorem', 'how to find a manta ray', 'the Portuguese word for \'jump\''];
    let random = Math.floor(Math.random() * learns.length);
    return learns[random];
  }
  
  saveLearn(newLearn) {
    // create or update the 'learns' localStorage object with the new learn,
    // and save it back to localStorage
    let learns = JSON.parse(window.localStorage.getItem('learns')) || {};
    learns[newLearn.createdAt] = newLearn.learn;
    window.localStorage.setItem('learns', JSON.stringify(learns));
    console.log('stored learns:', JSON.parse(window.localStorage.getItem('learns')));
  }

  render() {
    return (
      <form className="new-learn-form" onSubmit={this.submitNewLearn}>
        <input type="text" placeholder={this.randomLearn()} autoFocus required value={this.state.newLearn} onChange={this.handleChange}/>
        <input type="submit" value="Save"/>
      </form>
    );
  }
}

// initialise React app
ReactDOM.render(
  <NewLearnForm />,
  document.getElementById('app')
);