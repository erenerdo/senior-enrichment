import axios from 'axios';

/* -----------------    INITIAL STATE ------------------ */

const initialStudentState = [];

/* -----------------    ACTION TYPES ------------------ */

const GET_STUDENTS = 'GET_STUDENTS';

/* ------------   ACTION CREATORS     ------------------ */

export function getStudents (students) {
  const action = {type: GET_STUDENTS, students: students};
  return action;
}

/* ------------       REDUCER     ------------------ */

export default function reducer (prevState = initialStudentState, action) {

  const newState = Object.assign({}, prevState);

  switch (action.type) {
    case GET_STUDENTS:
      newState.students = action.students;
      return newState;
    default:
      return prevState;
  }
}
