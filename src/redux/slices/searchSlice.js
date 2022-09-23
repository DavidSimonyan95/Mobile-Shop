import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'SEARCH',
    initialState: '',
    reducers: {
        setSearchValue: (state, action) => action.payload
    }
})

export const { setSearchValue } = searchSlice.actions;
export default searchSlice.reducer;