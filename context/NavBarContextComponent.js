import React, { useState } from "react";
export const NavBarContext = React.createContext();

export default function NavBarContextComponent(props) {
  const [navBarExpanded, setNavBarExpanded] = useState(false);

  const changeNavBarExpanded = (newState) => {
    setNavBarExpanded(newState);
  };

  return (
    <NavBarContext.Provider
      value={{
        // Expanded of navbar
        navBarExpanded,
        changeNavBarExpanded,
      }}
    >
      {props.children}
    </NavBarContext.Provider>
  );
}
