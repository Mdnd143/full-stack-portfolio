const blogState = {
  blog: [],
};
const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    case "ADDBLOG":
      return [...state, action.payload];
    case "UPDATEBLOG":
      return state.map((el) =>
        el._id === action.payload._id ? action.payload : el
      );
    case "GETBLOGS":
      return action.payload;
    case "DELETEBLOG":
      return state.filter((el) => el._id !== action.payload);
    default:
      return state;
  }
};
export default blogReducer;
