import React from 'react';

// A 'learn' represents the thing a user has learned that day. It is stored
// when submitted, and then displayed in the LearnsList. This component handles
// the display of the Learn.

class Learn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.learn}</li>
    );
  }
}

module.exports = Learn;