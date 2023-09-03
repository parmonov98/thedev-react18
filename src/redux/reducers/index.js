import { combineReducers } from 'redux';
import uiSlice from './uiSlice';
import projectSlice from "./projectSlice";

const rootReducer = combineReducers({
  ui: uiSlice,
  project: projectSlice,
});
export default rootReducer;