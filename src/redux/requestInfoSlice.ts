import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    keyword: "",
    date: (new Date()).toDateString()
};

const requestInfoSlice = createSlice({
    initialState,
    name: "requestInfo",
    reducers: {
        setKeyword(state, action) {
            state.keyword = action.payload;
        },
        setDate(state, action) {
            console.log("Date: " + state.date);
            state.date = action.payload;

        }
    }
});

export const { setKeyword, setDate } = requestInfoSlice.actions;

export default requestInfoSlice.reducer;