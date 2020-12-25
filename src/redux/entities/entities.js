import { combineReducers } from "redux";
import nasaReducers from "../slice/nasaSlice";
import imageReducers from "../slice/imageSlice";

export default combineReducers({
  nasa: nasaReducers,
  image: imageReducers,
});
