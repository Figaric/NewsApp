import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const newsItemsSlice = createSlice({
    name: "newsItems",
    initialState,
    reducers: {
        setNewsItems: (state, action) => {
            state.items = [...state.items, ...action.payload];
        }
    }
});

export const { setNewsItems } = newsItemsSlice.actions;

export default newsItemsSlice.reducer;