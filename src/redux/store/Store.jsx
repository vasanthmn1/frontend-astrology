import { configureStore } from "@reduxjs/toolkit";
import LinkSlice from "../features/LinkSlice";


export const Store = configureStore({
    reducer: {
        link: LinkSlice,
    }
})


