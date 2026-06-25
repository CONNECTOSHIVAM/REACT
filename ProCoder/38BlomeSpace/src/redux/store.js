import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./Featues/serachSlice"

export const store = configureStore({
    reducer: {
        search: searchReducer,
    }
})

