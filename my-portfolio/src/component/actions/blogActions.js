import * as blogApi from "../api/blogApi";

export const createBlog = (data1) => async (dispatch) => {
  try {
    const { data } = await blogApi.addBlog(data1);
    dispatch({ type: "ADDBLOG", payload: data });
  } catch (err) {
    console.log(err);
  }
};
export const deleteBlog = (id) => async (dispatch) => {
  try {
    await blogApi.deleteBlog(id);
    dispatch({ type: "DELETEBLOG", payload: id });
  } catch (err) {
    console.log(err);
  }
};
export const getAllBlog = () => async (dispatch) => {
  try {
    const { data } = await blogApi.getBlog();
    dispatch({ type: "GETBLOGS", payload: data });
  } catch (err) {
    console.log(err);
  }
};
export const updateBlog = (newdata, id) => async (dispatch) => {
  try {
    const { data } = await blogApi.updateBlog(newdata, id);
    dispatch({ type: "UPDATEBLOG", payload: data });
  } catch (err) {
    console.log(err);
  }
};
