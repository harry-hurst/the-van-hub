import { createSlice } from "@reduxjs/toolkit";

export const collectionIdSlice = createSlice({
  name: "collectionId",

  initialState: {
    id: null,
  },

  reducers: {
    updateCollectionId: (state, action) => {
      state.id = action.payload;
    },

    clearCollectionId: (state) => {
      state.id = null;
    },
  },
});

export const { updateCollectionId, clearCollectionId } = collectionIdSlice.actions;

export default collectionIdSlice.reducer;
