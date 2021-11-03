// react
import { useState, useEffect, useContext, useRef } from "react";
import { HeaderContext } from "../../../context/HeaderContextComponent";

// styles
import modalStyles from "./Modal.module.css";

// components
import Arrow from "./Arrow";

import NavBar from "./NavBar";

export default function Modal() {
  // useState
  const [open, setOpen] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean>();

  // useContext
  const { headerMenusState, changeHeaderMenusState } =
    useContext(HeaderContext);

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

  // click away listener

  // useRef
  const modal = useRef<HTMLDivElement>(null);

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
  }, [
    headerMenusState.mobileMenu ||
      headerMenusState.searchMenu ||
      headerMenusState.basketMenu ||
      headerMenusState.navMenu,
  ]);

  function handleClick(event: any) {
    console.log("click");

    if (modal.current && !modal.current.contains(event.target)) {
      changeHeaderMenusState("navMenu", false);
    }
  }

  return (
    <div id={modalStyles.modalContainer}>
      <div className="container">
        <div
          id={modalStyles.modal}
          className={`
            ${open && `${modalStyles.modalExpanded}`}
            ${collapsed && !open && `${modalStyles.modalCollapsed}`}
          `}
          ref={modal}
        >
          <Arrow />
          <div
            id={modalStyles.modalInner}
            className={`
            ${open && `${modalStyles.modalInnerExpanded}`}
            ${collapsed && !open && `${modalStyles.modalInnerCollapsed}`}
            `}
          >
            <NavBar />
          </div>
        </div>
      </div>
    </div>
  );
}
