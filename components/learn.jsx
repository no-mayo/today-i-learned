import React from 'react';

class Learn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let learn = this.props.learn;
    return (
      <li>{learn}</li>
    );
  }
}

module.exports = Learn;