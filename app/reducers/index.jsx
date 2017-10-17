import { combineReducers } from 'redux';
import campuses from './campus';
import students from './student';

export default combineReducers({ students, campuses });
