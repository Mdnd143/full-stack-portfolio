import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import projectReducer from "./projectReducer";
import devmodeReducer from "./devmode";
import selectedBlogReducer from "./selectedReducer";
const reducers = combineReducers({
  projectReducer,
  blogReducer,
  devmodeReducer,
  selectedBlogReducer,
});
export default reducers;
