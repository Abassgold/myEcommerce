import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllOrders = createAsyncThunk('fetchAllorders', async () => {
    let url = `${import.meta.env.VITE_URI}/orders/all-orders`
    const { data } = await axios.get(url)
    console.log(data?.result);
    return data?.result;
})
const allOrderSlice = createSlice({
    name: 'orders',
    initialState: {
        isLoading: false,
        error: null,
        allOrders: [],
        myOrders: [],
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllOrders.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchAllOrders.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allOrders = [...action.payload]
        }).addCase(fetchAllOrders.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})
export default allOrderSlice.reducer;