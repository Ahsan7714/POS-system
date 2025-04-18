import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    menuItems: [],
    loading:false,
};

export const menuReducer = createReducer(initialState, (builder) => {
    builder
    // get All Menu Items
    .addCase("AllMenuRequest", (state) => {
        state.loading = true;
      })
      .addCase("AllMenuSuccess", (state, action) => {
        state.loading = false;
        state.menuItems = action.payload;
      })
      .addCase("AllMenuFail", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase("clearErrors", (state) => {
        state.error = null;
      });
})
