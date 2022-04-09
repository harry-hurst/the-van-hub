// create slice creates a slice of state for a specific purpose:
import { createSlice } from "@reduxjs/toolkit";

// create a search bar slice that determines whether search bar is open or closed:
export const searchBarSlice = createSlice({
  // name of slice
  name: "searchBar",

  // initial state object containing status key
  initialState: {
    status: false,
  },

  // the reducers for the actions:
  reducers: {
    openSearchBar: (state) => {
      state.status = true;
    },

    closeSearchBar: (state) => {
      state.status = false;
    },

    toggleSearchBar: (state) => {
      state.status = !state.status;
    },
  },
});

export const { openSearchBar, closeSearchBar, toggleSearchBar } =
  searchBarSlice.actions;

export default searchBarSlice.reducer;
