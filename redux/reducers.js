import {CHANGE_TAG, RECEIVE_QUESTIONS, REQUEST_QUESTIONS} from './actions';

import {uniqBy} from 'lodash';

function rootReducer(
  state = {
    isFetching: false,
    items: [],
    page: 1,
  },
  action,
) {
  switch (action.type) {
    case CHANGE_TAG:
      return {...state, items: []};
    case REQUEST_QUESTIONS:
      return {...state, isFetching: true};
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        isFetching: false,
        page: state.page + 1,
        items: uniqBy([...state.items, ...action.questions], 'question_id'),
      };
    default:
      return state;
  }
}

export default rootReducer;
