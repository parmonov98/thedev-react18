import { setTheme } from "../reducers/uiSlice";

export const toggleTheme = (themeValue) => async dispatch => {
  console.log(themeValue);
  try {

    localStorage.setItem('is_dark', !themeValue);

    dispatch(
      setTheme(!themeValue)
    );
  } catch (e) {
    return console.error(e);
  }
}