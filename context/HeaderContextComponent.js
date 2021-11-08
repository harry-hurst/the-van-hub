import React, { useState, useEffect, useRef } from "react";
export const HeaderContext = React.createContext();

export default function HeaderContextComponent(props) {
  // window width =======================================
  const [windowSize, setWindowSize] = useState();

  // set the window size
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 576) {
        setWindowSize("small");
      } else if (576 <= window.innerWidth && window.innerWidth < 768) {
        setWindowSize("medium");
      } else if (768 <= window.innerWidth) {
        setWindowSize("large");
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // ====================================================

  // search bar state ===================================
  const [searchBarState, setSearchBarState] = useState();

  const changeSearchBarState = (newState) => {
    setSearchBarState(newState);
  };
  // ====================================================

  // header menus state =================================
  const [headerMenusState, setHeaderMenusState] = useState({
    searchMenu: false,
    basketMenu: false,
    navMenu: false,
    mobileMenu: false,
  });

  const changeHeaderMenusState = (menu, newState) => {
    setHeaderMenusState({
      ...{
        searchMenu: false,
        basketMenu: false,
        navMenu: false,
        mobileMenu: false,
      },
      [menu]: newState,
    });
  };
  // ====================================================

  // current collection =================================
  const [currentCollectionId, setCurrentCollectionId] = useState();

  const changeCurrentCollectionId = (newMenu) => {
    setCurrentCollectionId(newMenu);
  };
  // ====================================================

  // useRef for clickaway listener ======================
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
  // ====================================================

  return (
    <HeaderContext.Provider
      value={{
        // window size
        windowSize,

        // searchBarState
        searchBarState,
        changeSearchBarState,

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
