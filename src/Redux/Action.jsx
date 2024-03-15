import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user', 
    initialState:{
        count: 0,
        allNames: [],
    },
    reducers:{
        increment: (state)=> {state.count +=1},
        decrement: (state)=> {state.count -=1},
        incrementByAmount: (state, action) => {
            state.count += action.payload
        }
    }
})

export default userSlice.reducer;
export const { increment, decrement, incrementByAmount } = userSlice.actions
