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

const { authLogin } = authSlice.actions;

export default authSlice.reducer;
