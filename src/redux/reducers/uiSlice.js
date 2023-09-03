import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isMobile: false,
    isDarkMode: false,
    value: 1
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value = + action.payload;
    },
    toggleTheme: (state, action) => {
      state.isDarkMode = !state.isDarkMode;
    }
  },
})
// Action creators are generated for each case reducer function
export const { toggleTheme, incrementByAmount } = uiSlice.actions

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}
export default uiSlice.reducer;