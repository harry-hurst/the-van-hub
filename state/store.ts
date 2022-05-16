// global store for site
import { configureStore } from "@reduxjs/toolkit";

// import slice reducers that are the default exports from each reducer slice file.
import searchBarStateReducer from "./searchBarStateSlice";
import searchTermReducer from "./searchTermSlice";
import activeMenuReducer from "./activeMenuSlice";
import collectionIdReducer from "./collectionIdSlice";
import bannerStateReducer from "./bannerStateSlice";

// export default store with a reducer function inside.
const store = configureStore({

  reducer: {
    // is the search bar open?
    searchBar: searchBarStateReducer,

    // what is the search term?
    searchTerm: searchTermReducer,

    // what is the active menu?
    activeMenu: activeMenuReducer,

    // what is the current collectin id?
    collectionId: collectionIdReducer,

    // is the promo banner open or dismissed?
    bannerState: bannerStateReducer,
  },
  
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
