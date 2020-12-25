import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Random Image

export const imageData = createAsyncThunk("image/imageContent", async () => {
  const { data } = await axios.get("https://source.unsplash.com/random");
  return data;
});
// Image fetch by random user name
export const imageDataByName = createAsyncThunk(
  "image/imageContent",
  async (KEYWORD) => {
    const { data } = await axios.get(
      `https://source.unsplash.com/featured/?${KEYWORD},${KEYWORD}`
    );
    return data;
  }
);

const imageSlice = createSlice({
  name: "image",
  initialState: {
    loading: true,
    imageApiData: [],
    imageByName: [],
  },
  extraReducers: {
    [imageData.fulfilled]: (state, actions) => {
      state.imageApiData = actions.payload;
      state.loading = false;
    },
    [imageDataByName.fulfilled]: (state, actions) => {
      state.imageByName = actions.payload;
      state.loading = false;
    },
  },
});

export default imageSlice.reducer;

// selector

export const dataImage = (state) => state.entities.image;
