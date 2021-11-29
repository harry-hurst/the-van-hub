import { createSlice } from "@reduxjs/toolkit";

export const activeMenuSlice = createSlice({
  name: "activeMenu",

  initialState: {
    menu: null,
  },

  reducers: {

    changeMenu: (state, action) => {
      state.menu = action.payload;
    },

    clearActiveMenu: (state) => {
      state.menu = null;
    }

  },
});

export const { changeMenu, clearActiveMenu } = activeMenuSlice.actions;

export default activeMenuSlice.reducer;