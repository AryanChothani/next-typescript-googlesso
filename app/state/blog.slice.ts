import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogs } from "./blog.action";


const blogsInitialState: any = { blogs: [] }

const blogsSlice = createSlice({
  name: 'blogs',
  initialState: blogsInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBlogs.fulfilled, (state: any, { payload }) => {
        state.blogs = payload;
      });
  }
})


export default blogsSlice;
