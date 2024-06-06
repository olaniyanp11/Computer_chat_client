// src/redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    id: null,
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  },
  isLoggedIn: false,
  successMessage: "",
  AccessToken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setloginstatus: (state, action) => {
      state.isLoggedIn = true;
    },
    setSuccessMessage: (state, action) => {
      state.successMessage = action.payload;
    },
    updateUserInfo: (state, action) => {
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    setAccessToken: (state, action) => {
      state.AccessToken = action.payload
    },
    logout: (state) => {
      state.userInfo = initialState.userInfo;
      state.isLoggedIn = false;
    },
  },
});

export const {
  setUserInfo,
  setloginstatus,
  setSuccessMessage,
  updateUserInfo,
  setAccessToken,
  logout,
} = userSlice.actions;
export default userSlice.reducer;
