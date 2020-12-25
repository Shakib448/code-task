import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create AsyncThunk

export const nasaData = createAsyncThunk("nasa/nasaContent", async () => {
  const { data } = await axios.get(
    "https://api.nasa.gov/planetary/apod?api_key=pNKMy2ZCO4TVIDwDHWpoOnKO5dFkaRHzqjhjBkvG"
  );
  return data;
});

const nasaSlice = createSlice({
  name: "nasa",
  initialState: {
    loading: true,
    nasaApiData: [],
  },
  extraReducers: {
    [nasaData.fulfilled]: (state, actions) => {
      state.nasaApiData = actions.payload;
      state.loading = false;
    },
  },
});

export const { increment } = nasaSlice.actions;

export default nasaSlice.reducer;

// selector

export const dataNasa = (state) => state.entities.nasa;
