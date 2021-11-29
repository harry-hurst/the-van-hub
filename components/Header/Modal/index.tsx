// react
import { useState, useEffect, useContext } from "react";
import { ScreenSizeContext } from "../../../context/ScreenSize";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";

// styles
import modalStyles from "./Modal.module.css";

// components
import Arrow from "./Arrow";
import NavBar from "./NavBar";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import Basket from "./Basket";
import SearchList from "./SearchList";

export default function Modal() {
  // redux
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);

  // global screen size variable.
  const { windowSize } = useContext(ScreenSizeContext);

  // modal can be expanded, collapsed or closed.
  const [modalState, setModalState] = useState<string>();

  // update modal state:
  useEffect(() => {
    if (activeMenu !== null) {
      setModalState("expanded");
    } else if (activeMenu === null && windowSize !== "small") {
      setTimeout(() => {
        setModalState("bar");
      }, 500);
    } else {
      setTimeout(() => {
        setModalState("collapsed");
      }, 500);
    }
  }, [activeMenu, windowSize]);

  return (
    <div id={modalStyles.modalContainer}>
      <div className="container">
        <div
          id={modalStyles.modal}
          className={`
          ${modalState === "bar" && `${modalStyles.modalBar}`}
            ${modalState === "expanded" && `${modalStyles.modalExpanded}`}
            ${modalState === "collapsed" && `${modalStyles.modalCollapsed}`}
          `}
        >
          <Arrow />
          <div
            id={modalStyles.modalCover}
            className={`
            ${modalState === "collapsed" && `${modalStyles.noPadding}`}
            `}
          >
            <div
              id={modalStyles.modalInner}
              className={`
            ${modalState === "expanded" && `${modalStyles.overflowHidden}`}
            `}
            >
              <NavBar />
              <MobileMenu />
              <Basket />
              <NavMenu />
              <SearchList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
