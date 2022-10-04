const devState = {
  isDevMode: false,
};
const devmodeReducer = (state = devState, action) => {
  switch (action.type) {
    case "ENABLEDEVMODE":
      return true;
    case "DISABLEDEVMODE":
      return false;
    default:
      return state;
  }
};
export default devmodeReducer;
