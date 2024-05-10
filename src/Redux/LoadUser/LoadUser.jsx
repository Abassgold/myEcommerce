import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const loadUser = createAsyncThunk('loadUser', async (URI) => {
  const token = localStorage.getItem('userToken');
  try {
      const { data } = await axios.get(URI, {
          headers: {
              "Authorization": "Bearer " + token,
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
      });
      if (!data.success) {
          localStorage.removeItem('userToken'); // Clear token if request fails
      }
      return data;
  } catch (error) {
      throw new Error('Failed to load user data'); // Throw error to be handled by the rejected case
  }
});

const loadUserSlice = createSlice({
  name: 'loadUserSlice',
  initialState: {
    isLoading: false,
    isAuthorized: false,
    user: null,
    error: null
  },
  extraReducers: (builder) => {
    builder.addCase(loadUser.pending, (state, action) => {
      state.isLoading = true;
    }).addCase(loadUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthorized = true;
      state.user = action.payload;
    }).addCase(loadUser.rejected, (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.isAuthorized = false;
      state.error = action.error.message;
    })
  }
})

export default loadUserSlice.reducer;