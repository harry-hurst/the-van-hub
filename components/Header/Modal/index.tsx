// react
import { useState, useEffect, useContext } from "react";
import { HeaderContext } from "../../../context/HeaderContextComponent";

// styles
import modalStyles from "./Modal.module.css";

// components
import Arrow from "./Arrow";

import NavBar from "./NavBar";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";

// modules
import { AnimateSharedLayout } from "framer-motion";

export default function Modal() {
  // useState
  const [open, setOpen] = useState<boolean>(false);

  // useContext
  const { headerMenusState, modal, small } = useContext(HeaderContext);

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

  return (
    <div id={modalStyles.modalContainer}>
      <div className="container">
        <div
          id={modalStyles.modal}
          className={`
            ${open && `${modalStyles.modalExpanded}`}
            ${small && !open && `${modalStyles.modalCollapsed}`}
          `}
          ref={modal}
        >
          <Arrow />
          <div
            id={modalStyles.modalInner}
            className={`
            ${open && `${modalStyles.modalInnerExpanded}`}
            ${small && !open && `${modalStyles.modalInnerCollapsed}`}
            `}
          >
            <AnimateSharedLayout>
              <NavBar />
              <MobileMenu />
              <NavMenu />
            </AnimateSharedLayout>
          </div>
        </div>
      </div>
    </div>
  );
}
