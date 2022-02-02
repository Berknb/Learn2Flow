import { configureStore } from '@reduxjs/toolkit'
import alertReducer from './states/AlertSlice'

export default configureStore({
  reducer: {
      alert: alertReducer,
  },
})