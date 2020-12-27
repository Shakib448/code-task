import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Album

export const albumApiData = createAsyncThunk("album/albumContent", async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/photos"
  );
  return data;
});

const albumSlice = createSlice({
  name: "image",
  initialState: {
    loading: true,
    albumData: [],
  },
  extraReducers: {
    [albumApiData.fulfilled]: (state, actions) => {
      state.albumData = actions.payload;
      state.loading = false;
    },
  },
});

export default albumSlice.reducer;

// selector

export const dataImage = (state) => state.entities.image;
