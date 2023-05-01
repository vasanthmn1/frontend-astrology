import { configureStore } from "@reduxjs/toolkit";
import LinkSlice from "../features/LinkSlice";
import authSclice from "../features/AuthSclice";


export const Store = configureStore({
    reducer: {
        link: LinkSlice,
        auth: authSclice
    }
})


