import { combineReducers } from "redux";
import nasaReducers from "../slice/nasaSlice";
import imageReducers from "../slice/imageSlice";
import postReducer from "../slice/postSlice";

export default combineReducers({
  nasa: nasaReducers,
  image: imageReducers,
  post: postReducer,
});
