import { createSlice } from "@reduxjs/toolkit";

const counterSlice =createSlice({
    name:'counter',
    initialState:{count :0},
    reducers:{
        increment : (state)=>{
            state.count++
        },
        decrement :(state)=>{
            state.count--
        },
        reset:(state)=>{
            return{
                ...state,count:0
            }
            
        },
        incrementByamount: (state,action)=>{
            state.count += +action.payload
        }

    }
})
export const{increment,decrement,reset,incrementByamount}=counterSlice.actions
export default counterSlice.reducer