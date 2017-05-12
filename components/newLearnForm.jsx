import React from 'react';
import LearnsList from '../components/learnsList';
import setLearn from '../actions/setLearn';

// The NewLearnForm allows users to type and submit their Learn for the day.
// The 'newLearn' in the state represents anything the user has typed so far
// in the input field - we capture it every time they press a key.

class NewLearnForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      learns: JSON.parse(window.localStorage.getItem('learns')) || [],
      newLearn: ''
    };

    // this binding is necessary to make `this` work in the callbacks
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
    console.log('- NewLearnForm.saveLearn()');
    console.log('newLearn:', newLearn);
    // create or update the 'learns' localStorage object with the new learn,
    // and save it back to localStorage

    // TODO: surely this code is what should go into one of the Redux functions?
    // check that random Codepen to see ...
    // let learns = JSON.parse(window.localStorage.getItem('learns')) || [];
    // console.log('learns from storage:', learns);
    // learns.push(newLearn);
    // window.localStorage.setItem('learns', JSON.stringify(learns));
    // update this component's state with the latest learn in place
    // this.setState({learns: learns});
    // dispatch({type: SET_ACTIVE_ROOM, payload: { room: activeRoom, id: room_id}});
    setLearn(newLearn);
  }

  render() {
    return (
      <div>
        <form className="new-learn-form" onSubmit={this.submitNewLearn}>
          <input type="text" placeholder={this.randomLearn()} autoFocus required value={this.state.newLearn} onChange={this.handleChange}/>
          <input type="submit" value="Save"/>
        </form>
        <LearnsList learns={this.state.learns}/>
      </div>
    );
  }
}

module.exports = NewLearnForm;