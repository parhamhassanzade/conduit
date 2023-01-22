import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userInfo",
  initialState: {
    userInfo: {},
    login: false,
  },
  reducers: {
    getUserInfo: (state, action) => {
      state.userInfo = action.payload;
      state.login = true;
    },
    logOut: (state, action) => {
      state.login = false;
      state.userInfo = action.payload;
    },
  },
});

export const { getUserInfo, logOut } = userSlice.actions;

export default userSlice.reducer;
