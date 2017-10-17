import axios from 'axios';

/* -----------------    INITIAL STATE ------------------ */

const initialStudentState = [];

/* -----------------    ACTION TYPES ------------------ */

const GET_STUDENTS = 'GET_STUDENTS';
const REMOVE_STUDENT = 'REMOVE_STUDENT';

/* ------------   ACTION CREATORS     ------------------ */

export function getStudents (students) {
  const action = { type: GET_STUDENTS, students: students };
  return action;
}

export function removeStudent (studentId) {
  const action = { type: REMOVE_STUDENT, id: studentId};
  return action;
}

/* ------------       REDUCER     ------------------ */

export default function reducer(prevState = initialStudentState, action) {

  let newState = prevState;

  switch (action.type) {
    case GET_STUDENTS:
      newState = action.students;
      return newState;
    case REMOVE_STUDENT:
      newState = newState.filter(student => student.id !== action.id);
      return newState;
    default:
      return prevState;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchStudents = () => {
  return function thunk (dispatch) {
    axios.get('/api/student')
      .then(res => {
        const students = res.data;
        dispatch(getStudents(students));
      });
  };
};

export const deleteStudent = (studentId) => {
  return function thunk (dispatch) {
    dispatch(removeStudent(studentId));
    axios.delete(`api/student/${studentId}`)
    .catch(err => console.error(`Removing user: ${studentId} unsuccesful`, err));
  };
};
