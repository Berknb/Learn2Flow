import { createSlice } from '@reduxjs/toolkit'

export const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    value: 0,
  },
  reducers: {
    alertSuccess: (state) => {
      state.value += 1;
    },
    alertError: (state) => {
        state.value -= 1;
      },
  },
})

export const { alertSuccess, alertError } = alertSlice.actions

export default alertSlice.reducer