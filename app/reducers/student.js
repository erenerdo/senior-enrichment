import axios from 'axios';

/* -----------------    INITIAL STATE ------------------ */

const initialStudentState = [];

/* -----------------    ACTION TYPES ------------------ */

const GET_STUDENTS = 'GET_STUDENTS';
const REMOVE_STUDENT = 'REMOVE_STUDENT';
const ADD_STUDENT = 'ADD_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const REFRESH_STUDENT = 'REFRESH_STUDENT';

/* ------------   ACTION CREATORS     ------------------ */

export const getStudents = (students) => {
  const action = { type: GET_STUDENTS, students: students };
  return action;
};

export const removeStudent = (studentId) => {
  const action = { type: REMOVE_STUDENT, id: studentId };
  return action;
};

export const addStudent = (student) => {
  const action = { type: ADD_STUDENT, student: student };
  return action;
};

export const updateStudent = (newStudentInfo) => {
  const action = { type: UPDATE_STUDENT, newStudentInfo };
  return action;
};

export const refreshStudent = (campusId) => {
  const action = { type: REFRESH_STUDENT, id: campusId};
  return action;
};

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
    case ADD_STUDENT:
      newState = newState.concat(action.student);
      return newState;
    case UPDATE_STUDENT:
      newState = newState.filter(student => student.id !== action.newStudentInfo.id);
      newState = newState.concat(action.newStudentInfo);
      return newState;
    case REFRESH_STUDENT:
    newState = newState.filter(student => student.campusId !== action.id);
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

export const deleteStudent = (studentId) => {
  return function thunk (dispatch) {
    dispatch(removeStudent(studentId));
    axios.delete(`api/student/${studentId}`)
      .catch(() => console.log(`Removing student unsuccesful`));
  };
};

export const addNewStudent = (student) => {
  return function thunk(dispatch) {
    axios.post('api/student', student)
      .then((response) => {
        console.log(response);
        dispatch(addStudent(response.data));
      })
      .catch(() => console.log(`Adding student: ${student.name} unsuccesful`));
  };
};

export const updateStudentInfo = (newStudentInfo) => {
  return function thunk(dispatch) {
    axios.put(`api/student/${newStudentInfo.id}`, newStudentInfo)
    .then((res) => {
      // Wtf am i even doing bruh
      // How tf does this work
      const updatedInfo = res.data[1][0];
      dispatch(updateStudent(updatedInfo));
    });
  };
};

export const refreshStudentState = (campusId) => {
    return function thunk (dispatch) {
      dispatch(refreshStudent(campusId));
    };
};
