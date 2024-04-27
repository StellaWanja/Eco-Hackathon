import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  userId: localStorage.getItem('id') || false,
  isLoggedIn: localStorage.getItem('id') ? true : false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state) => {
      state.isLoggedIn = true;
      state.userId = localStorage.getItem('id');
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.userId = false;
      toast.success("You have successfuly logout");
    }
  },
});

// console.log(cartSlice);
export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;