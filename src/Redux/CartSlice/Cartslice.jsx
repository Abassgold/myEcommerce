import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    shippingInfo: localStorage.getItem('shippingInfo') ? JSON.parse(localStorage.getItem('shippingInfo')) : {},
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartItemsQuantity: localStorage.getItem('cartItemsQuantity') ? parseInt(localStorage.getItem('cartItemsQuantity')) : 0,
    cartTotalAmount: localStorage.getItem('cartTotalAmount') ? parseFloat(localStorage.getItem('cartTotalAmount')) : 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { newItems, itemQuantity, price } = action.payload;
      const existingItems = state.cartItems.find(item => item._id === newItems._id);

      if (existingItems) {
        if (existingItems.quantity >= newItems.stock) {
          // If the stock limit is reached, don't add the item
          return state;
        } else {
          // If adding one more doesn't exceed the stock, increment the quantity
          existingItems.quantity += itemQuantity;
          existingItems.qtyPrice += price
          state.cartItemsQuantity += 1;
          state.cartTotalAmount += price;
        }
      } else {
        if (1 > newItems.stock) {
          // If the stock limit is reached, don't add the item
          return state;
        } else {
          // If adding one item doesn't exceed the stock, add the item to the cart
          state.cartItems.push({ ...newItems, quantity: itemQuantity, qtyPrice: price });
          state.cartItemsQuantity += 1;
          state.cartTotalAmount += price;
        }
      }

      // Update localStorage after any cart item changes
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      localStorage.setItem('cartItemsQuantity', state.cartItemsQuantity);
      localStorage.setItem('cartTotalAmount', state.cartTotalAmount);
    },
    decreaseQuantity: (state, action) => {
      const { newItems, itemQuantity, price } = action.payload;
      const existingItems = state.cartItems.find(item => item._id === newItems._id);

      if (existingItems) {
        if (existingItems.quantity <= itemQuantity) {
          // If the stock limit is reached, don't add the item
          return state;
        } else {
          // If adding one more doesn't exceed the stock, increment the quantity
          existingItems.quantity -= itemQuantity;
          existingItems.qtyPrice -= price
          state.cartItemsQuantity -= 1;
          state.cartTotalAmount -= price;
        }
      }

      // Update localStorage after any cart item changes
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      localStorage.setItem('cartItemsQuantity', state.cartItemsQuantity);
      localStorage.setItem('cartTotalAmount', state.cartTotalAmount);
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.cartItems.findIndex(item => item._id === itemId._id);
      if (itemIndex !== -1) {
        const itemToRemove = state.cartItems[itemIndex];
        console.log(itemToRemove);
        state.cartItemsQuantity -= itemToRemove.quantity;
        state.cartTotalAmount -= itemToRemove.price * itemToRemove.quantity;
        state.cartItems.splice(itemIndex, 1);

        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        localStorage.setItem('cartItemsQuantity', state.cartItemsQuantity);
        localStorage.setItem('cartTotalAmount', state.cartTotalAmount);
      }
    },
    addShippingInfo: (state, action) => {
      state.shippingInfo = action.payload
      localStorage.setItem('shippingInfo', JSON.stringify(state.shippingInfo))
    }
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, decreaseQuantity, addShippingInfo } = cartSlice.actions;
