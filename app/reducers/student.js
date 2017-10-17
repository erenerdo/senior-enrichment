import axios from 'axios';

/* -----------------    INITIAL STATE ------------------ */

const initialStudentState = [];

/* -----------------    ACTION TYPES ------------------ */

const GET_STUDENTS = 'GET_STUDENTS';

/* ------------   ACTION CREATORS     ------------------ */

export function getStudents(students) {
  const action = { type: GET_STUDENTS, students: students };
  return action;
}


/* ------------       REDUCER     ------------------ */

export default function reducer(prevState = initialStudentState, action) {

  let newState = prevState;

  switch (action.type) {
    case GET_STUDENTS:
      newState = action.students;
      return newState;
    default:
      return prevState;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchStudents = () => {
  return function thunk(dispatch) {
    axios.get('/api/student')
      .then(res => {
        const students = res.data;
        dispatch(getStudents(students));
      });
  };
};
