// create slice creates a slice of state for a specific purpose:
import { createSlice } from "@reduxjs/toolkit";

  // wether promo banner is visable or dismissed:
export const bannerStatusSlice = createSlice({
  // name of slice
  name: "bannerStatus",

  // initial state object containing status key
  initialState: {
    status: true,
  },

  // the reducers for the actions:
  reducers: {
    hideBanner: (state) => {
      state.status = false;
    },
  },
});

export const { hideBanner } = bannerStatusSlice.actions;

export default bannerStatusSlice.reducer;
