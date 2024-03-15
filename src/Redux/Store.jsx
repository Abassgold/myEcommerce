import { configureStore } from "@reduxjs/toolkit";
import userSlice from './Action.jsx';
import AllProductSlic from "./AllProductSlice/AllProductSlic.js";
import cartReducer from "./CartSlice/Cartslice.jsx";
const store = configureStore({
    reducer:{
        userSlice,
        products: AllProductSlic,
        cartReducer,
    }
})
export default store;