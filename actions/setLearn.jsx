import ActionTypes from '../constants/actionTypes';
import database from '../constants/database';

export default function setLearn(learn) {
  console.log('- setLearn(), learn:', learn);
  return dispatch => {
    dispatch(setLearnRequestedAction());
    return database.ref('/users/test/learns').set({
      createdAt: learn.createdAt,
      learn: learn.learn
    }).then((learn) => {
      dispatch(setLearnFulfilledAction(learn));
    }, (error) => {
      console.log(error);
      dispatch(setLearnRejectedAction());

    });
  };
}

function setLearnRequestedAction() {
  console.log('- setLearnRequestedAction()');
  return {
    type: ActionTypes.SetLearnRequested
  };
}

function setLearnRejectedAction() {
  console.log('- setLearnRejectedAction()');
  return {
    type: ActionTypes.SetLearnRejected
  };
}

function setLearnFulfilledAction(learn) {
  console.log('- setLearnFulfilledAction(), learn:', learn);
  return {
    type: ActionTypes.SetLearnFulfilled,
    learn
  };
}