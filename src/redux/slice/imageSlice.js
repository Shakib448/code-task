import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Image fetch by random user name
export const imageDataByName = createAsyncThunk(
  "image/imageContentByKeyword",
  async ({ keyword }) => {
    console.log(keyword);
    const { data } = await axios.get(
      `https://source.unsplash.com/featured/?${keyword}, ${keyword}`
    );
    return data;
  }
);

const imageSlice = createSlice({
  name: "image",
  initialState: {
    imageByKeyword: [],
  },
  extraReducers: {
    [imageDataByName.fulfilled]: (state, actions) => {
      state.imageByKeyword = actions.payload;
    },
  },
});

export default imageSlice.reducer;

// selector

export const dataImage = (state) => state.entities.image;
