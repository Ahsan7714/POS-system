import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isUser:false,
  user:null,
  users:[]
};

export const userReducer = createReducer(initialState,(builder)=>{
    builder
    // get All User --- admin
    .addCase("AllUserRequest", (state) => {
        state.loading = true;
      })
      .addCase("AllUserSuccess", (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase("AllUserFail", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

       // load user reducer
    .addCase("LoadUserRequest", (state) => {
      state.loading = true;
    })
    .addCase("LoadUserSuccess", (state, action) => {
      state.isUser= true;
      state.loading = false;
      state.user= action.payload;
    })
    .addCase("LoadUserFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

      .addCase("clearErrors", (state) => {
        state.error = null;
      });
})