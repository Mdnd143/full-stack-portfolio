import axios from "axios";

let url = "YOUR_API";

export const getBlog = () => axios.get(`${url}/blogs`);
export const deleteBlog = (id) => axios.delete(`${url}/blogs/${id}`);
export const updateBlog = (newblogdata, id) =>
  axios.patch(`${url}/blogs/${id}`, newblogdata);
export const addBlog = (newblog) => axios.post(`${url}/addblog`, newblog);
