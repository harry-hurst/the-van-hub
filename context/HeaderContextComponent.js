import React, { useState } from "react";
export const HeaderContext = React.createContext();

export default function HeaderContextComponent(props) {
  
  const [searchState, setSearchState] = useState(false);

  const [headerMenusState, setHeaderMenusState] = useState({
    burgerMenu: false,
    searchMenu: false,
    basketMenu: false,
  });

  const changeSearchState = (newState) => {
    setSearchState(newState);
  };

  const changeHeaderMenusState = (menu, newState) => {
    setHeaderMenusState({
      ...{
        burgerMenu: false,
        searchMenu: false,
        basketMenu: false,
      },
      [menu]: newState,
    });
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
      }}
    >
      {props.children}
    </HeaderContext.Provider>
  );
}
