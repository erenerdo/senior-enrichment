import axios from 'axios';

/* -----------------    INITIAL STATE ------------------ */

const initialCampusState = [];

/* -----------------    ACTION TYPES ------------------ */

const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';

/* ------------   ACTION CREATORS     ------------------ */

export const getCampuses = (campuses) => {
  const action = { type: GET_CAMPUSES, campuses: campuses };
  return action;
};

export const addCampus = (campus) => {
  const action = { type: ADD_CAMPUS, campus: campus };
  return action;
};

export const removeCampus = (campusId) => {
  console.log('Remove Campus Ran');
  const action = { type: REMOVE_CAMPUS, id: campusId };
  return action;
};
/* ------------       REDUCER     ------------------ */

export default function reducer(prevState = initialCampusState, action) {

  let newState = prevState;

  switch (action.type) {
    case GET_CAMPUSES:
      newState = action.campuses;
      return newState;
    case ADD_CAMPUS:
      newState = newState.concat(action.campus);
      return newState;
    case REMOVE_CAMPUS:
      console.log('Reducer Ran');
      newState = newState.filter((campus) => {
        return campus.id !== action.id;
      });
      return newState;
    default:
      return prevState;
  }
}

/* ------------   THUNK CREATORS     ------------------ */
export const fetchCampuses = () => {
  return function thunk(dispatch) {
    axios.get('/api/campus')
      .then((res) => {
        const campuses = res.data;
        dispatch(getCampuses(campuses));
      });
  };
};

export const addNewCampus = (campus) => {
  return function thunk(dispatch) {
    axios.post('api/campus', campus)
      .then(res => {
        dispatch(addCampus(res.data));
      });
  };
};

export const deleteCampus = (campusId) => {
  console.log('Delete Campus Ran');
  return function thunk (dispatch) {
    console.log('Thunk Ran');
    dispatch(removeCampus(campusId));
    axios.delete(`api/campus/${campusId}`)
      .catch(() => console.log(`Removing campus unsuccesful`));
  };
};
