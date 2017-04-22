import React from 'react';
import Learn from '../components/learn';

class LearnsList extends React.Component {
  constructor(props) {
    super(props);
  }

  makeLearnsArray(learns) {
    console.log('- LearnsList - makeLearnsArray()');
    console.log('learns:', learns);
    const learnsArray = [];
    if (learns) {
      Object.keys(learns).forEach(function(key) {
        learnsArray.push({
          key: key,
          learn: learns[key]
        });
      })
    }
    return learnsArray; //learnsArray.slice(learnsArray.length - 10, learnsArray.length);
  }

  render() {
    const learns = this.makeLearnsArray(this.props.learns).map((learn) =>
      <Learn key={learn.key} learn={learn.learn} />
    );
    return (
      <ul className='learns'>
        {learns}
      </ul>
    );
  }
}

module.exports = LearnsList;