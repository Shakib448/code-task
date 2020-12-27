import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Post Data

export const postData = createAsyncThunk("post/postContent", async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
});
// Post fetch by  id
export const postById = createAsyncThunk("post/postById", async (id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
});

// Post fetch by  id comment
export const postByIdComment = createAsyncThunk(
  "post/postByIdComment",
  async (id) => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );
    return data;
  }
);

const postSlice = createSlice({
  name: "image",
  initialState: {
    loading: true,
    postApiData: [],
    postByIdData: [],
    postByComment: [],
  },
  extraReducers: {
    [postData.fulfilled]: (state, actions) => {
      state.postApiData = actions.payload;
      state.loading = false;
    },
    [postById.fulfilled]: (state, actions) => {
      state.postByIdData = actions.payload;
      state.loading = false;
    },
    [postByIdComment.fulfilled]: (state, actions) => {
      state.postByComment = actions.payload;
      state.loading = false;
    },
  },
});

export default postSlice.reducer;

// selector

export const dataPost = (state) => state.entities.post;
