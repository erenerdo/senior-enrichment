import axios from 'axios';

/* -----------------    INITIAL STATE ------------------ */

const initialCampusState = [];

/* -----------------    ACTION TYPES ------------------ */

const GET_CAMPUSES = 'GET_CAMPUSES';

/* ------------   ACTION CREATORS     ------------------ */

export function getCampuses(campuses) {
  const action = { type: GET_CAMPUSES, campuses: campuses };
  return action;
}

/* ------------       REDUCER     ------------------ */

export default function reducer(prevState = initialCampusState, action) {

  let newState = prevState;

  switch (action.type) {
    case GET_CAMPUSES:
      newState = action.campuses;
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
