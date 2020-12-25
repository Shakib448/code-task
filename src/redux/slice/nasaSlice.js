import { createSlice } from "@reduxjs/toolkit";

const nasaSlice = createSlice({
  name: "nasa",
  initialState: {
    loading: true,
    nasaData: [],
  },

  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
  },
});

export const { increment } = nasaSlice.actions;

export default nasaSlice.reducer;
