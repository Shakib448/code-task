import { combineReducers } from "redux";
import nasaReducers from "../slice/nasaSlice";

export default combineReducers({
  nasa: nasaReducers,
});
