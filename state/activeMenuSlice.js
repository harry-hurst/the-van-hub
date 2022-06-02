import { createSlice } from "@reduxjs/toolkit";

export const activeMenuSlice = createSlice({
  name: "activeMenu",

  initialState: {
    menu: null,
  },

  reducers: {

    changeActiveMenu: (state, action) => {
      state.menu = action.payload;
    },

    clearActiveMenu: (state) => {
      state.menu = null;
    }

  },
});

export const { changeActiveMenu, clearActiveMenu } = activeMenuSlice.actions;

export default activeMenuSlice.reducer;