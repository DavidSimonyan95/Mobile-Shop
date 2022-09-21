import { configureStore } from "@reduxjs/toolkit";
import langReducer from './slices/languageSlice';

export const store = configureStore({
    reducer: {
        lang: langReducer
    }
})
