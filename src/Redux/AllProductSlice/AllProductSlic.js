import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProduct = createAsyncThunk('fetchProduct', async(URI)=>{
    let response = await axios.get(URI)
    return response.data;
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        isLoading: false,
        allProduct: [],
        error: '',
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.pending, (state, action)=>{
            state.isLoading = true;
        }).addCase(fetchProduct.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.allProduct = action.payload
        }).addCase(fetchProduct.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        })
    },
})

export default productSlice.reducer;
