import { configureStore } from '@reduxjs/toolkit'
// import uiReducer from './redux/uiSlice';
import rootReducer from "./redux/reducers";

export default configureStore({
  reducer: rootReducer,
})