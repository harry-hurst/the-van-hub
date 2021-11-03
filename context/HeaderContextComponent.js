import React, { useState, useEffect, useRef } from "react";
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

  // useRef

  const modal = useRef();
  const basketIcon = useRef();
  const burgerIcon = useRef();

  useEffect(() => {
    if (
      !(
        headerMenusState.mobileMenu ||
        headerMenusState.searchMenu ||
        headerMenusState.basketMenu ||
        headerMenusState.navMenu
      )
    )
      return;

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [headerMenusState]);

  function handleClick(event) {
    if (
      !(
        modal.current.contains(event.target) ||
        basketIcon.current.contains(event.target) ||
        burgerIcon.current.contains(event.target)
      )
    ) {
      changeHeaderMenusState();
    }
  }

  // helper functions

  const changeSearchState = (newState) => {
    setSearchState(newState);
  };

  const changeHeaderMenusState = (menu, newState) => {
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

        // ref objects to pass down to be attached to dom nodes
        modal,
        basketIcon,
        burgerIcon,
      }}
    >
      {props.children}
    </HeaderContext.Provider>
  );
}
