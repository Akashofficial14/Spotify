import { createSlice } from "@reduxjs/toolkit";

let authSlice = createSlice({
  name: "authdata",
  initialState: {
    loginUserData: JSON.parse(localStorage.getItem("logindata")) || null,
    regUserData: JSON.parse(localStorage.getItem("regdata")) || [],
    logout: false,
  },
  reducers: {
    setRegUser: (state, action) => {
      state.regUserData = action.payload;
    },
    setLoginUser: (state, action) => {
      state.loginUserData = action.payload;
    },
    LogoutFn: (state) => {
      if (state.logout == false) {
        state.logout = true;
        return;
      }
      state.logout = false;
    },
    logoutresetFn: (state) => {
      state.loginUserData = null;
      localStorage.removeItem("logindata");
      state.logout=false
    },
  },
});

export const { setLoginUser, setRegUser, LogoutFn, logoutresetFn } =
  authSlice.actions;
export default authSlice.reducer;
