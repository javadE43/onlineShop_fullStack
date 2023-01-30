import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL= "http://localhost:4000/api/v1/auth/regeister"
const initialState={
    status:null,
    error: null
}

export const registerFetch=createAsyncThunk(
    "register/registerFetch",
    async (user)=>{
      const responce= await axios.post(BASE_URL,user)
         return responce?.data;
    }
);

const signUpSlice=createSlice({
    name:'register',
    initialState,
    reducers:{
          
    },
    extraReducers(builder) {
        builder
            .addCase(registerFetch.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(registerFetch.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Adding date and reactions
            })
            .addCase(registerFetch.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
        })
    }
});


export default signUpSlice.reducer;
