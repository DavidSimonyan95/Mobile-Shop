import { configureStore } from "@reduxjs/toolkit";
import langReducer from './slices/languageSlice';
import searchReducer from './slices/searchSlice';

export const store = configureStore({
    reducer: {
        lang: langReducer,
        searchValue: searchReducer
    }
})
