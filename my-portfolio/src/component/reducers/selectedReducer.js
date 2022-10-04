const selectedBlogState = {
  blog: {},
};
const selectedBlogReducer = (state = selectedBlogState, action) => {
  switch (action.type) {
    case "GETONEBLOG":
      return action.payload;
    default:
      return state;
  }
};

export default selectedBlogReducer;
