import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

// Initial State
const initialState = {
  students: [],
  campuses: []
};

// Action Types
const GET_STUDENTS = 'GET_STUDENTS';
const GET_CAMPUSES = 'GET_CAMPUSES';

// Action Creators
export function getStudents (students) {
  const action = {type: GET_STUDENTS, students: students};
  return action;
}
export function getCampuses (campuses) {
  const action = {type: GET_CAMPUSES, campuses: campuses};
  return action;
}

function rootReducer (prevState = initialState, action) {

  const newState = Object.assign({}, prevState);

  switch (action.type) {
    case GET_STUDENTS:
      newState.students = action.students;
      return newState;
    case GET_CAMPUSES:
      newState.campuses = action.campuses;
      return newState;
    default:
      return prevState;
  }
}

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()));
