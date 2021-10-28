// react
import React, { useState } from "react";
export const TopBarContext = React.createContext();

export default function TopBarContextComponent(props) {

  //state
  const [searchState, setSearchState] = useState(false);

  const [dropdownMenusState, setDropdownMenusState] = useState({
    mobileMenu: false,
    searchListResults: false,
    basketModal: false,
  });

  function changeSearchState(newSearchState) {
    setSearchState(newSearchState);
  }

  function changeDropdownMenusState(menu, newState) {
    setDropdownMenusState({
      ...{
        mobileMenu: false,
        searchListResults: false,
        basketModal: false,
      },
      [menu]: newState,
    });
  }

  return (
    <TopBarContext.Provider
      value={{
        searchState,
        changeSearchState,
        dropdownMenusState,
        changeDropdownMenusState,
      }}
    >
      {props.children}
    </TopBarContext.Provider>
  );
}
