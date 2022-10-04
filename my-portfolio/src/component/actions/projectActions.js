import * as projectApi from "../api/projectApi";

export const createProject = (dataa) => async (dispatch) => {
  try {
    const { data } = await projectApi.addProject(dataa);
    dispatch({ type: "ADDPROJECT", payload: data });
  } catch (err) {
    console.log(err);
  }
};
export const deleteProject = (id) => async (dispatch) => {
  try {
    await projectApi.deleteProject(id);
    dispatch({ type: "DELETEPROJECT", payload: id });
  } catch (err) {
    console.log(err);
  }
};
export const getAllProject = () => async (tdispatch) => {
  try {
    const { data } = await projectApi.getProject();
    tdispatch({ type: "GETPROJECTS", payload: data });
  } catch (err) {
    console.log(err);
  }
};
export const updateProject = (newdata, id) => async (dispatch) => {
  try {
    const { data } = await projectApi.updateProject(newdata, id);
    dispatch({ type: "UPDATEPROJECT", payload: data });
  } catch (err) {
    console.log(err);
  }
};
