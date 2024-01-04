// here we define action and reducer

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    reducers:{
        //action are created inside tis  reducers key(actions are logics)
        //logic to update the data
        increament:(state,action)=>{
            state.value=state.value+action.payload;
        },
        decreament:(state,action)=>{
            state.value=state.value-action.payload;
        },
        reset:(state)=>{
            state.value=0;
        }
    }
})
export const {increament,decreament,reset} = counterSlice.actions;
export default counterSlice.reducer;