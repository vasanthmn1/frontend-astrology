import { configureStore } from "@reduxjs/toolkit";
import LinkSlice from "../features/LinkSlice";
import authSclice from "../features/AuthSclice";
import ZodiacSlice from "../features/ZodiacSlice";


export const Store = configureStore({
    reducer: {
        link: LinkSlice,
        auth: authSclice,
        zodiac: ZodiacSlice
    }
})


