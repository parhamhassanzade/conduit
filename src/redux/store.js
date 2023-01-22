import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userInfo";
export default configureStore({
    reducer: {
        userInfo: userSliceReducer,
    },
});
