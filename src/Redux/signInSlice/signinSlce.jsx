import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchInfo = createAsyncThunk('auth/loginUser', async ({ URI, values }) => {
    const { data } = await axios.post(URI, values)
    if (data?.success) {
        localStorage.setItem('userToken', data.token);
        console.log(data)
    }
    else {

    }
    return data;
});
const signIn = createSlice({
    name: 'signIn',
    initialState: {
        isLoading: false,
        user: null,
        isAuthenticated: false,
        error: null,
        authToken: localStorage.getItem('userToken') ? localStorage?.userToken : null,
    },
    reducers: {
        logOut(state) {
            state.authToken = null;
            localStorage.removeItem('userToken');
        },
        fetchUserInfo: (state, action) => {
            state.authToken = action.payload;
            localStorage.userToken = state.authToken;
        },
        addUser: (state, action) => {
            state.user = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchInfo.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchInfo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        }).addCase(fetchInfo.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    },

})
export const {logOut, fetchUserInfo, addUser} = signIn.actions;
export default signIn.reducer;