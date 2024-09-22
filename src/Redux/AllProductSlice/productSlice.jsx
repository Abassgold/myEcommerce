import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchSingleProduct = createAsyncThunk('fetchSingleProduct', async(URI)=>{
    let response = await axios.get(URI)
    return response.data.result;
})
const product = createSlice({
    name : 'singleproduct',
    initialState:{
        isLoading: false,
        product: '',
        error: '',
        arrMenue: sessionStorage.getItem('arrMenue') ? parseInt(sessionStorage.getItem('arrMenue')) : 0,
    },
    reducers:{
        changeMenues:(state, action)=>{
            state.arrMenue = action.payload;
            sessionStorage.setItem('arrMenue', state.arrMenue)
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchSingleProduct.pending,(state)=>{
            state.isLoading = true;
        }).addCase(fetchSingleProduct.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.product = action.payload;
        }).addCase(fetchSingleProduct.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})
export default product.reducer;
export const { changeMenues } = product.actions;
