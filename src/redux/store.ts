import { configureStore } from "@reduxjs/toolkit";
import newsItemsSlice from "./newsItemsSlice";

const reduxStore = configureStore({
    reducer: {
        newsItems: newsItemsSlice
    }
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export default reduxStore;