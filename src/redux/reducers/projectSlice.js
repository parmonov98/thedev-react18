import { createSlice } from '@reduxjs/toolkit';

export const projectSlice = createSlice({
  name: 'project',
  initialState: {
    items: [],
    project: null,
  },
  reducers: {
    setProjects: (state, action) => {
      console.log(state, action);
      state.items = action.payload;
    },
    setSingleProject: (state, action) => {
      state.project = action.payload;
    },
  },
});

console.log(projectSlice.actions);
// Action creators are generated for each case reducer function
export const { setProjects, setSingleProject } = projectSlice.actions

export default projectSlice.reducer;