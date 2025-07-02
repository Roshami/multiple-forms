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
  },
});

export const { storeProductBasicDetails } = productBasicDetailsSlice.actions;

export default productBasicDetailsSlice.reducer;
