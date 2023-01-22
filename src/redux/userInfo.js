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
    },
});

export const { getUserInfo } = userSlice.actions;

export default userSlice.reducer;
