import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cartItems: [],
        cartItemsQuantity : 0,
        cartTotalAmount : 0,
    },
    reducers: {
        addToCart: (state, action)=>{
            const newItems = action.payload;
            const existingItems = state.cartItems.find(item => item.id === newItems.id)
            if(existingItems){
                existingItems.qauntity += 1;
            }
            state.cartItems.push(action.payload);
        }
    }
})

export default cartSlice.reducer;
export const {addToCart} = cartSlice.actions;