import { createSlice } from "@reduxjs/toolkit";
import { restAllData } from "../commanAction";

const initialState = {
  loading: false,
  
};

export const webSlice = createSlice({
  name: "web",
  initialState,
  extraReducers: (builder) => builder.addCase(restAllData, () => initialState),
  reducers: {
    userSubscribe: (state)=>{
      state.loading = true;
    },
    updateUser: (state)=>{
      state.loading = true;
    },
    onErrorStopLoad: (state) => {
      state.loading = false;
    },
    stopLoading: (state) => {
      state.loading = false;  
    },
  },
});
export const {
  userSubscribe,
  updateUser,
  stopLoading,
  onErrorStopLoad
} = webSlice.actions;

export default webSlice.reducer;
