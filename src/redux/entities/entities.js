import { combineReducers } from "redux";
import nasaReducers from "../slice/nasaSlice";
import imageReducers from "../slice/imageSlice";
import postReducers from "../slice/postSlice";
import authReducers from "../slice/authSlice";
import albumReducers from "../slice/albumSlice";

export default combineReducers({
  nasa: nasaReducers,
  image: imageReducers,
  post: postReducers,
  auth: authReducers,
  album: albumReducers,
});
