import axios from 'axios';

/* -----------------    INITIAL STATE ------------------ */

const initialCampusState = [];

/* -----------------    ACTION TYPES ------------------ */

const GET_CAMPUSES = 'GET_CAMPUSES';

/* ------------   ACTION CREATORS     ------------------ */

export function getCampuses (campuses) {
  const action = {type: GET_CAMPUSES, campuses: campuses};
  return action;
}

/* ------------       REDUCER     ------------------ */

export default function reducer (prevState = initialCampusState, action) {

  const newState = Object.assign({}, prevState);

  switch (action.type) {
    case GET_CAMPUSES:
      newState.campuses = action.campuses;
      return newState;
    default:
      return prevState;
  }
}
