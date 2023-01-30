import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL= "http://localhost:4000/api/v1/auth/login"
const initialState={
    token:{},
    status:null,
    error: null
}

export const loginFetch=createAsyncThunk(
    "login/loginFetch",
    async (user)=>{
      const responce= await axios.post(BASE_URL,user)
         return responce?.data;
    }
);

const signUpSlice=createSlice({
    name:'login',
    initialState,
    reducers:{

    },
    extraReducers(builder) {
        builder
            .addCase(loginFetch.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(loginFetch.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.token=action.payload;
            })
            .addCase(loginFetch.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
        })
    }
});

export const { increaseCount, reactionAdded } = signUpSlice.actions
export default signUpSlice.reducer;