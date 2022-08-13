import { configureStore } from "@reduxjs/toolkit";
import newsItemsSlice from "./newsItemSlice";

const store = configureStore({
    reducer: {
        newsItems: newsItemsSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;