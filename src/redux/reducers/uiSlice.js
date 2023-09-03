import { createSlice } from '@reduxjs/toolkit';

const DarkMode = () => {
  return localStorage.getItem("is_dark") === 'true' ? true : false;
}
export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isMobile: false,
    isDarkMode: DarkMode(),
    value: 1
  },
  reducers: {
    setTheme: (state, action) => {
      state.isDarkMode = action.payload;
    }
  },
})
console.log(uiSlice.actions);
// Action creators are generated for each case reducer function
export const { setTheme } = uiSlice.actions

export default uiSlice.reducer;