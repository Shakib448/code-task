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
  },
});

export const { authLogin } = authSlice.actions;

export default authSlice.reducer;

// Selector

export const authSelector = (state) => state.entities.auth;
