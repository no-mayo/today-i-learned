import React from 'react';
import Learn from '../components/learn';

// The LearnsList component displays all of the user's Learns in a nice list.

class LearnsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let learns = this.props.learns.map((learn) =>
      <Learn key={learn.createdAt} learn={learn.learn} />
    );
    return (
      <ul className='learns'>
        {learns}
      </ul>
    );
  }
}

module.exports = LearnsList;