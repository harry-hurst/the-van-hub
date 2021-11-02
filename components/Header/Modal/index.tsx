// react
import { useState, useEffect, useContext } from "react";
import { HeaderContext } from "../../../context/HeaderContextComponent";

// styles
import modalStyles from "./Modal.module.css";

// components
import Arrow from "./Arrow";
import NavBar from "./NavBar";
import NavMenu from "./NavMenu";

export default function Modal() {
  // useState
  const [open, setOpen] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean>();

  // useContext
  const { headerMenusState } = useContext(HeaderContext);

  // useEffect
  useEffect(() => {
    if (
      headerMenusState.mobileMenu ||
      headerMenusState.searchMenu ||
      headerMenusState.basketMenu ||
      headerMenusState.navMenu
    ) {
      setOpen(true);
    } else {
      setTimeout(() => {
        setOpen(false);
      }, 400);
    }
  }, [headerMenusState]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 576) {
        setCollapsed(false);
      } else {
        setCollapsed(true);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id={modalStyles.modalContainer}>
      <div className="container">
        <div
          id={modalStyles.modal}
          className={`
            
            ${open && `${modalStyles.modalExpanded}`}

            ${collapsed && !open && `${modalStyles.modalCollapsed}`}
      
          `}
        >
          <Arrow />

          <div
            id={modalStyles.modalInner}
            className={`
            
            ${open && `${modalStyles.modalInnerExpanded}`}

            ${collapsed && !open && `${modalStyles.modalInnerCollapsed}`}
            
            `}
          >
            {/* <NavBar />

            {headerMenusState.navMenu && <NavMenu />} */}
          </div>
        </div>
      </div>
    </div>
  );
}
