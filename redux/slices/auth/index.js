import { createSlice } from "@reduxjs/toolkit";
import { restAllData } from "../commanAction";
import Cookies from "js-cookie";

const initialState = {
  userInfo: {},
  isLoggedIn: false,
  loading: false

};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => builder.addCase(restAllData, () => initialState),
  reducers: {
    socialLogin: (state) => {
      state.loading = true;
    },
    setUserLogin: (state ,action)=>{
      state.loading = false;
      state.isLoggedIn = true;
      state.userInfo = action.payload
    },
    // logout: (state) => {
    //   state.loading = true;
    // },
    setLogout: (state, action) => {
      state.loading = false;
      state.userInfo= {},
      state.isLoggedIn= false
    },
    onErrorStopLoad: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  socialLogin,
  setUserLogin,
  setLogout,
  // logout,
  onErrorStopLoad
} = authSlice.actions;

export default authSlice.reducer;
