import { configureStore } from "@reduxjs/toolkit";
import productBasicDetailsReducer from "./routers/utilities/slice/productBasicDetailsSlice";

export default configureStore({
    reducer: {
        productDetails : productBasicDetailsReducer
    },
});