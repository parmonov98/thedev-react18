import { configureStore } from '@reduxjs/toolkit'
import uiReducer from '../stores/uiSlice'

export default configureStore({
  reducer: {
    ui: uiReducer
  },
})