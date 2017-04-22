import React from 'react';
import { connect } from 'react-redux'
import NewLearnForm from '../components/newLearnForm';
import LearnsList from '../components/learnsList';
// import { getLearn } from '../actions/getLearn';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('- App render()');
    console.log('this.state:', this.state);
    console.log('this.props:', this.props);
    
    // console.log('store.getState():', store.getState());
    return (
      <div>
        <NewLearnForm />
        <LearnsList learns={this.props.learns}/>
      </div>
    );
  }
}

// module.exports = App;
// export default connect()(App);

const mapStateToProps = (state) => {
  return {
    learns: ['this is a test learn']
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLearnClick: (id) => {
      dispatch(whatShouldThisDo(id))
    }
  }
}

function whatShouldThisDo(id) {
  console.log('- whatShouldThisDo()');
  console.log('id:', id);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)