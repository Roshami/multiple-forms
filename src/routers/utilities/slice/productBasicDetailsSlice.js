import { createSlice } from "@reduxjs/toolkit";


export const productBasicDetailsSlice = createSlice({
    name: "productBasicDetails",
    initialState: {
        ProductBasicDetails : {}
    },
    reducers: {
        storeProductBasicDetails: (state, action) => {},
    },
})

export default productBasicDetailsSlice.reducer