const projectReducer = (state = { project: [] }, action) => {
  switch (action.type) {
    case "ADDPROJECT":
      return [...state, action.payload];
    case "UPDATEPROJECT":
      return state.map((el) =>
        el._id === action.payload._id ? action.payload : el
      );
    case "GETPROJECTS":
      return action.payload;
    case "DELETEPROJECT":
      return state.filter((el) => el._id !== action.payload);
    default:
      return state;
  }
};
export default projectReducer;
