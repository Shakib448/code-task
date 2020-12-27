import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { clientID } from "../../FirebaseConfig/Firebase.config";

// Image fetch by random user name
export const imageDataByName = createAsyncThunk(
  "image/imageContentByKeyword",
  async ({ keyword }) => {
    const { data } = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=${clientID}`
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
