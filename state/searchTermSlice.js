import { createSlice } from "@reduxjs/toolkit";

export const searchTermSlice = createSlice({
  name: "searchTerm",

  initialState: {
    term: "",
  },

  reducers: {
    updateSearchTerm: (state, action) => {
      state.term = action.payload;
    },

    clearSearchTerm: (state) => {
      state.term = "";
    },
  },
});

export const { updateSearchTerm, clearSearchTerm } = searchTermSlice.actions;

export default searchTermSlice.reducer;
