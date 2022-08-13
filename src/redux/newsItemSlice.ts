import { createSlice } from "@reduxjs/toolkit";
import NewsItemType from "../types/NewsItemType";

const initialState = {
    newsItems: [],
    selectedItem: ({} as NewsItemType)
};

const newsItemsSlice = createSlice({
    name: "newsItems",
    initialState,
    reducers: {
        addItems(state, action) {
            state.newsItems = [...action.payload, ...state.newsItems];
        },
        setSelectedItem(state, action) {
            console.log("Action payload: ", action.payload);


            state.selectedItem = action.payload;
        }
    }
});

export const { addItems, setSelectedItem } = newsItemsSlice.actions;

export default newsItemsSlice;