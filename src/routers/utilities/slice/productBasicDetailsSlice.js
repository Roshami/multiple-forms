import { createSlice } from '@reduxjs/toolkit';

export const productBasicDetailsSlice = createSlice({
  name: 'productBasicDetails',
  initialState: {
    ProductBasicDetails: {},
  },
  reducers: {
    storeProductBasicDetails: (state, action) => {
      console.log(action);
      state.ProductBasicDetails = action.payload;
    },
    resetProductBasicDetails: (state) => {
      state.ProductBasicDetails = {};
    },
  },
});

export const { storeProductBasicDetails, resetProductBasicDetails } = productBasicDetailsSlice.actions;

export default productBasicDetailsSlice.reducer;
