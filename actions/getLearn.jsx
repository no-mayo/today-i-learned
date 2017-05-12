import ActionTypes from '../constants/actionTypes';
import database from '../constants/database';

export function getLearn() {
  console.log('- getLearn()');
  return dispatch => {
    // TODO: use Firebase and these different functions
    // dispatch(getLearnRequestedAction());
    // return database.ref('/').once('value', snap => {
    //   const learn = snap.val();
    //   dispatch(getLearnFulfilledAction(learn))
    // })
    // .catch((error) => {
    //   console.log(error);
    //   dispatch(getLearnRejectedAction());
    // });
    getLearnFulfilledAction('[learn here?]');
  }
}

function getLearnRequestedAction() {
  console.log('- getLearnRequestedAction()');
  return {
    type: ActionTypes.GetLearnRequested
  };
}

function getLearnRejectedAction() {
  console.log('- getLearnRejectedAction()');
  return {
    type: ActionTypes.GetLearnRejected
  }
}

function getLearnFulfilledAction(learn) {
  console.log('- getLearnFulfilledAction(), learn:', learn);
  return {
    type: ActionTypes.GetLearnFulfilled,
    learn
  };
}