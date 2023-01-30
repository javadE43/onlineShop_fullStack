import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';



const initialState={
    items:[],
    status:null,
    error: null
}

export const productsFatch=createAsyncThunk(
    "products/productsFatch",
    async ()=>{
      const responce= await axios.get('https://fakestoreapi.com/products')
         return responce?.data;
    }
);

const productSlice=createSlice({

    name:'product',
    initialState,
    // reducers:{},
    extraReducers:{
        [productsFatch.pending]:(state)=>{
          state.status='pending'
        },
        [productsFatch.fulfilled]:(state,action)=>{
            state.items=action.payload;
            state.status='success'
        

        },
        [productsFatch.rejected]:(state)=>{
            state.status='rejected'
        }
    }
});


export default productSlice.reducer;

///////////////////////////////////


// const POSTS_URL = 'http://localhost:4000/api/v1/product';



// const initialState={
//     items:[],
//     status:null,
//     error: null
// }


// export const productApi=createAsyncThunk(
//     "product/productsFatch",
//     async ()=>{
//       const responce= await axios.get(POSTS_URL)
//          return responce?.data;
//     }
// );

// const productSlice=createSlice({

//     name:'product',
//     initialState,
//     extraReducers(builder) {
//         builder
//             .addCase(fetchPosts.pending, (state, action) => {
//                 state.status = 'loading'
//             })
//             .addCase(fetchPosts.fulfilled, (state, action) => {
//                 state.status = 'succeeded'
//             })
//             .addCase(fetchPosts.rejected, (state, action) => {
//                 state.status = 'failed'
//                 state.error = action.error.message
//             })
                
//       }
// });


// export const selectAllproduct = (state) => state.product.product;
// export const getproductstatus = (state) => state.product.status;
// export const getProductError = (state) => state.product.error;

// export const selectByIdProduct = (state, productId) =>
//     state.product.product.find(pro => pro=== productId);

// // export const { postAdded, reactionAdded } = postsSlice.actions

// export default productSlice.reducer