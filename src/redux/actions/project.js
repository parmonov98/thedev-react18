import axiosClient from "../../utils/axios";
import { setProjects, setSingleProject } from "../reducers/projectSlice";
export const getProjects = (payload = {}) => async dispatch => {
  console.log(dispatch);
  try {
    const { data } = await axiosClient.get('api/v1/projects')

    dispatch(
      setProjects(data.data)
    );

    return data.data;
  } catch (e) {
    return console.error(e.message);
  }
}
export const getSingleProject = (id) => async dispatch => {
  try {
    const { data } = await axiosClient.post('api/v1/projects/' + id)

    dispatch(
      setSingleProject(data.project)
    );
    // dispatch(setProjects(res));
  } catch (e) {
    return console.error(e.message);
  }
}