import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = "http://localhost:4000/api/v1/category";

const initialState = {
  items: [],
  status: null,
  error: null,
};

export const categoryApi = createAsyncThunk(
  "category/categoryApi",
  async () => {
    const responce = await axios.get(POSTS_URL);
    return responce;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers:{
    category:(state,action)=>{
      state.items=action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(categoryApi.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(categoryApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items=action.payload
      })
      .addCase(categoryApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllcategory = (state) => state.category;
export const getcategorystatus = (state) => state.category.status;
export const getcategoryError = (state) => state.category.error;

// export const selectByIdcategory = (state, categoryId) =>
//   state.category.category.find((pro) => pro === categoryId);

export const { category } = categorySlice.actions

export default categorySlice.reducer;






// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const POSTS_URL = "http://localhost:4000/api/v1/";

// export const CategoryApi = createApi({
//   reducerPath: "categoryApi",
//   baseQuery: fetchBaseQuery({ baseUrl: POSTS_URL }),
//   endpoints: (builder) => ({
//     getAllCategory: builder.query({
//       query: () => "category",
//       transformResponse: res => {
//         console.log(res.data)
//         return res;
//       },
//     }),
//   }),
// });

// export const { useGetAllCategoryQuery } = CategoryApi;
