import { combineReducers } from "redux";
import nasaReducers from "../slice/nasaSlice";
import imageReducers from "../slice/imageSlice";
import postReducers from "../slice/postSlice";
import authReducers from "../slice/authSlice";

export default combineReducers({
  nasa: nasaReducers,
  image: imageReducers,
  post: postReducers,
  auth: authReducers,
});
