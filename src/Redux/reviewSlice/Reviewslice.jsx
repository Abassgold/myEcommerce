import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchReviews = createAsyncThunk('fetchReviews', async function () {
    const { data } = await axios.put()
    return data
})
const reviewSlice = createSlice({
    name: 'reviews',
    initialState: {
        isLoading: false,
        allReviews: [],
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchReviews.pending, function (state, action) {
            state.isLoading = true;
        }).addCase(fetchReviews.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allReviews = [...action.payload]
        }).addCase(fetchReviews.rejected, (state, action) => {
            state.error = action?.error?.message
        });
    }
})
export default reviewSlice.reducer;