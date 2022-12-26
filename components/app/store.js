import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/UderSlice"
import ResReducer from "../features/ResSlice"
import BasketReducer from "../features/BasketSlice"
export default configureStore({
    reducer:{
        user:userReducer,
        resturant:ResReducer,
        basket:BasketReducer,
    },
});
