import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContentfulClient } from "../ContentfulApiClient";

const Contentful = new ContentfulClient("blogs");


export const fetchBlogs = createAsyncThunk(
    "blogs/GetAll",
    async (searchText: string) => {
        try {
            const data = await Contentful.getItems();
            return data;
        } catch (e) {
            console.log(`Error fetching data: ${e}`);
        }
    }
);