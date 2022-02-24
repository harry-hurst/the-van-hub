// global store for site
import { configureStore } from "@reduxjs/toolkit";

// import slice reducers that are the default exports from each reducer slice file.
import searchBarReducer from "./searchBarSlice";
import searchTermReducer from "./searchTermSlice";
import activeMenuReducer from "./activeMenuSlice";
import collectionIdReducer from "./collectionIdSlice";
import bannerStatusReducer from "./bannerStatusSlice";

// export default store with a reducer function inside.
const store = configureStore({

  reducer: {
    searchBar: searchBarReducer,
    searchTerm: searchTermReducer,
    activeMenu: activeMenuReducer,
    collectionId: collectionIdReducer,
    bannerStatus: bannerStatusReducer,
  },
  
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
