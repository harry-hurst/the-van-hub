import React, { useState, useEffect } from "react";
export const HeaderContext = React.createContext();

export default function HeaderContextComponent(props) {
  
  // useState

  const [searchState, setSearchState] = useState(false);

  const [headerMenusState, setHeaderMenusState] = useState({
    mobileMenu: false,
    searchMenu: false,
    basketMenu: false,
    navMenu: false,
  });

  const [currentCollectionId, setCurrentCollectionId] = useState();

  // helper functions

  const changeSearchState = (newState) => {
    setSearchState(newState);
  };

  const changeHeaderMenusState = (menu, newState) => {
    console.log("changeHeaderMenusState");
    setHeaderMenusState({
      ...{
        mobileMenu: false,
        searchMenu: false,
        basketMenu: false,
        navMenu: false,
      },
      [menu]: newState,
    });
  };

  const changeCurrentCollectionId = (newMenu) => {
    setCurrentCollectionId(newMenu);
  };

  return (
    <HeaderContext.Provider
      value={{
        // state of the search search input (open or collapsed)
        searchState,
        changeSearchState,

        // state of topbar menus
        headerMenusState,
        changeHeaderMenusState,

        // hold a current collection id to use in navMenu
        currentCollectionId,
        changeCurrentCollectionId,
      }}
    >
      <div style={{ border: "1px solid red"}}>
      {props.children}
      </div>
    </HeaderContext.Provider>
  );
}
