import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authData: [],
  },
  reducers: {
    authLogin: (state, action) => {
      state.authData = action.payload;
    },
    authLogOut: (state, action) => {
      sessionStorage.removeItem("token");
      state.authData = action.payload;
    },
  },
});

export const { authLogin, authLogOut } = authSlice.actions;

export default authSlice.reducer;

// Selector

export const authSelector = (state) => state.entities.auth;
