import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchMyOrders = createAsyncThunk('fetchMyOrders', async (id) => {
    let url = `http://localhost:5000/orders/single-order/${id}`
    const { data } = await axios.get(url)
    console.log(data);
    return data;
});
const myOrderSlice = createSlice({
    name: 'my-order',
    initialState: {
        isLoading: false,
        error: null,
        myOrders: [],
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMyOrders.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchMyOrders.fulfilled, (state, action) => {
            state.isLoading = false;
            state.myOrders = [...action.payload]
        }).addCase(fetchMyOrders.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message
        })
    }
})