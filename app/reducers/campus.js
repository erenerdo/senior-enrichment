import axios from 'axios';

/* -----------------    INITIAL STATE ------------------ */

const initialCampusState = [];

/* -----------------    ACTION TYPES ------------------ */

const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';

/* ------------   ACTION CREATORS     ------------------ */

export const getCampuses = (campuses) => {
  const action = { type: GET_CAMPUSES, campuses: campuses };
  return action;
};

export const addCampus = (campus) => {
  const action = { type: ADD_CAMPUS, campus: campus};
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
  return function thunk (dispatch) {
    axios.post('api/campus', campus)
    .then(res => {
      dispatch(addCampus(res.data));
    });
  };
};
