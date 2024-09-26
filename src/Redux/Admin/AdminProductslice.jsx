import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
export const fetchProductAdmin = createAsyncThunk('fetchProductAdmin', async(URI)=>{
    let response = await axios.get(URI)
    return response.data;
})

const AdminProductSlice = createSlice({
    name: 'productAdmin',
    initialState: {
        isLoading: false,
        allProduct: [],
        error: '',
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProductAdmin.pending, (state, action)=>{
            state.isLoading = true;
        }).addCase(fetchProductAdmin.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.allProduct = action.payload
        }).addCase(fetchProductAdmin.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        })
    },
})

export default AdminProductSlice.reducer;
