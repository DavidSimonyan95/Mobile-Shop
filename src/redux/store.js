import { configureStore } from "@reduxjs/toolkit";
import langReducer from './slices/languageSlice';
import searchReducer from './slices/searchSlice';
import cartReducer from './slices/cartSlice'

export const store = configureStore({
    reducer: {
        lang: langReducer,
        searchValue: searchReducer,
        cart:cartReducer
    }
})
