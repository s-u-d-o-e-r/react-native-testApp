import fetch from 'isomorphic-fetch';

export const REQUEST_QUESTIONS = 'REQUEST_POSTS';
export const RECEIVE_QUESTIONS = 'RECEIVE_POSTS';
export const CHANGE_TAG = 'CHANGE_TAG';
function requestQuestions(tag) {
  return {
    type: REQUEST_QUESTIONS,
    tag,
  };
}

function receiveQuestions(tag, json) {
  return {
    type: RECEIVE_QUESTIONS,
    tag,
    questions: json,
  };
}

function changeTag(tag) {
  return {
    type: CHANGE_TAG,
    tag,
  };
}

export default function fetchQuestions(page, tag) {
  return (dispatch, getState) => {
    if (!tag) {
      tag = getState().tag;
    } else {
      dispatch(changeTag(tag));
    }

    dispatch(requestQuestions(tag));
    return fetch(
      `https://api.stackexchange.com/2.2/questions?page=${
        page >= 1 ? page : 1
      }&pagesize=20&order=desc&sort=creation&tagged=${tag}&site=stackoverflow`,
    )
      .then(response => response.json())
      .then(json => dispatch(receiveQuestions(tag, json.items)));
  };
}
