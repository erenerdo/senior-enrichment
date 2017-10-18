import axios from 'axios';

/* -----------------    INITIAL STATE ------------------ */

const initialCampusState = [];

/* -----------------    ACTION TYPES ------------------ */

const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

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
  const action = { type: REMOVE_CAMPUS, id: campusId };
  return action;
};

export const updateCampus = (updatedCampus) => {
  const action = { type: UPDATE_CAMPUS, updatedCampus};
  console.log('Update Campus Action', action);
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
      newState = newState.filter((campus) => {
        return campus.id !== action.id;
      });
      return newState;
    case UPDATE_CAMPUS:
      newState = newState.filter(campus => {
        return campus.id !== action.updatedCampus.id;
      });
      newState = newState.concat(action.updatedCampus);
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
  return function thunk (dispatch) {
    dispatch(removeCampus(campusId));
    axios.delete(`api/campus/${campusId}`)
      .catch(() => console.log(`Removing campus unsuccesful`));
  };
};

export const updateCampusInfo = (newCampusInfo) => {
  return function thunk (dispatch) {
    axios.put(`api/campus/${newCampusInfo.id}`, newCampusInfo)
    .then(res => {
      const updatedCampusInfo = res.data[1][0]; // wtf sequelize, y u do this to me
      console.log('Thunk', updatedCampusInfo);
      console.log('Update Action', updateCampus(updatedCampusInfo));
      dispatch(updateCampus(updatedCampusInfo));
    });
  };
};
