import ActionTypes from '../constants/actionTypes';
// import database from './database';

export function getLearn() {
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
  return {
    type: ActionTypes.GetLearnRequested
  };
}

function getLearnRejectedAction() {
  return {
    type: ActionTypes.GetLearnRejected
  }
}

function getLearnFulfilledAction(learn) {
  return {
    type: ActionTypes.GetLearnFulfilled,
    learn
  };
}