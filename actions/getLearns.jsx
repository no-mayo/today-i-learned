import ActionTypes from '../constants/actionTypes';
import database from '../constants/database';

export default function getLearns() {
  console.log('- getLearns()');
  return dispatch => {
    dispatch(getLearnsRequestedAction());
    return database.ref('/users/test/learns').once('value', (snapshot) => {
      let learns = snapshot.val();
      getLearnsFulfilledAction(learns);
    }).catch((error) => {
      console.log(error);
      dispatch(getLearnsRejectedAction());
    });
  }
}

function getLearnsRequestedAction() {
  console.log('- getLearnsRequestedAction()');
  return {
    type: ActionTypes.GetLearnsRequested
  };
}

function getLearnsRejectedAction() {
  console.log('- getLearnsRejectedAction()');
  return {
    type: ActionTypes.GetLearnsRejected
  }
}

function getLearnsFulfilledAction(learns) {
  console.log('- getLearnsFulfilledAction(), learns:', learns);
  return {
    type: ActionTypes.GetLearnsFulfilled,
    learn
  };
}