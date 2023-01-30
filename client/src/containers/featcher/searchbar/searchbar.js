import {createSlice} from '@reduxjs/toolkit';


const initialState={
    data:[],
    products:[]
}

const searchslice=createSlice({
    name:'searchBar',
    initialState,
    reducers:{
        search:(state,action)=>{
            state.data=action.payload.data;
              
            let filterProducts=state.data.filter((val)=>{
                if (action.payload.inputvalue == '') {
                    return 
                } else if(val.title.toLowerCase().replace(/\s/g,'').includes(action.payload.inputvalue.toLowerCase().replace(/\s/g,''))) {
                    return val
                }
             }).map((val,key)=>{
                 return val
             })
             state.products=filterProducts;
             
        }
    }

})

export const {search}=searchslice.actions;
export default searchslice.reducer;