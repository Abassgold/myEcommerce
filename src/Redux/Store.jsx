import { configureStore } from "@reduxjs/toolkit";
import userSlice from './Action.jsx';
import AllProductSlic from "./AllProductSlice/AllProductSlic.js";
import cartReducer from "./CartSlice/Cartslice.jsx";
import productSlice from "./AllProductSlice/productSlice.jsx";
productSlice
const store = configureStore({
    reducer:{
        userSlice,
        products: AllProductSlic,
        cartReducer,
        productSlice
    }
})
export default store;