import React, { useState } from "react";
export const TopBarContext = React.createContext();

export default function TopBarContextComponent(props) {
  const [searchState, setSearchState] = useState(false);
  const [burgerIconState, setBurgerIconState] = useState(false);

  const changeSearchState = (newState) => {
    setSearchState(newState);
  };

  const changeBurgerIconState = (newState) => {
    setBurgerIconState(newState);
  };

  return (
    <TopBarContext.Provider
      value={{
        // state of the search search input (open or collapsed)
        searchState,
        changeSearchState,

        // state of the burger icon (toggled or not)
        burgerIconState,
        changeBurgerIconState,
      }}
    >
      {props.children}
    </TopBarContext.Provider>
  );
}
