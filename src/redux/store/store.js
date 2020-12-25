import { configureStore } from "@reduxjs/toolkit";
import reducer from "../combineReducers/combineReducers";

const store = configureStore({
  reducer,
});

export default store;
