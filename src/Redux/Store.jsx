import { configureStore } from "@reduxjs/toolkit";
import userSlice from './Action.jsx';
import AllProductSlic from "./AllProductSlice/AllProductSlic.js";
import cartReducer from "./CartSlice/Cartslice.jsx";
import productSlice from "./AllProductSlice/productSlice.jsx";
import signinSlce from "./signInSlice/signinSlce.jsx";
import LoadUser from "./LoadUser/LoadUser.jsx";
import Cartslice from "./CartSlice/Cartslice.jsx";
import Slide from "./SlideSlice/Slide.jsx";
const store = configureStore({
    reducer: {
        userSlice,
        products: AllProductSlic,
        cartReducer,
        productSlice,
        signinSlce,
        LoadUser,
        Cartslice,
        Slide

    }
})
export default store;