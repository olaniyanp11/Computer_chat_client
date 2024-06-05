// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userstate";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
