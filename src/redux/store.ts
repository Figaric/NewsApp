import { configureStore } from "@reduxjs/toolkit";
import newsItemsSlice from "./newsItemsSlice";
import requestInfoSlice from "./requestInfoSlice";

const reduxStore = configureStore({
    reducer: {
        newsItems: newsItemsSlice,
        requestInfo: requestInfoSlice
    }
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export default reduxStore;