import { createSlice } from "@reduxjs/toolkit";

const slideSlide =  createSlice({
    name: 'slide',
    initialState: {
        isOpen: false
    },
    reducers: {
        setSlide(state) {
            state.isOpen = !state.isOpen;
            console.log(state.isOpen);
          },
    },
})
export const { setSlide } = slideSlide.actions;
export default slideSlide.reducer;