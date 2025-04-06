import { createReducer } from "@reduxjs/toolkit";
const initialState = {
    orders:[],
}
export const orderReducer = createReducer(initialState,(builder)=>{
    builder
    // get All Order --- admin
    .addCase("AllOrderRequest", (state) => {
        state.loading = true;
      })
      .addCase("AllOrderSuccess", (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase("AllOrderFail", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase("clearErrors", (state) => {
        state.error = null;
      });
})