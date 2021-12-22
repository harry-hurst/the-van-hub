// react
import { useState, useEffect, useContext } from "react";
import { ScreenSizeContext } from "../../../context/ScreenSize";

// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../state/store";
import { clearCollectionId } from "../../../state/collectionIdSlice";

// styles
import modalStyles from "./Modal.module.css";

// components
import Arrow from "./Arrow";

import NavBar from "./Headers/NavBar";
import ShopMenu from "./Headers/ShopMenu";

import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import Basket from "./Basket";
import SearchList from "./SearchList";

// next components
import { useRouter } from "next/router";

// modules
import { AnimatePresence } from "framer-motion";

export default function Modal(props: { modal: any }) {
  // router used for getting data out of the url bar
  const router = useRouter();
  const { FirstPositionDomain } = router.query;

  // redux

  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);

  const dispatch = useDispatch();

  // global screen size variable.
  const { windowSize } = useContext(ScreenSizeContext);

  // modal can be expanded, collapsed or closed.
  const [modalState, setModalState] = useState<string>();

  // update modal state:
  useEffect(() => {
    // if there is an active menu, expand:
    if (activeMenu !== null) {
      setModalState("expanded");

      // if there is not an active menu an screen is not small:
    } else if (activeMenu === null && windowSize !== "small") {
      dispatch(clearCollectionId());

      if (modalState === "expanded") {
        setTimeout(() => {
          setModalState("bar");
        }, 400);
      } else {
        setModalState("bar");
      }

      // if there is not an active menu and screen is small:
    } else {
      setTimeout(() => {
        setModalState("collapsed");
      }, 400);
    }
  }, [activeMenu, windowSize]);

  const [activeMenuDelayed, setActiveMenuDelayed] = useState<
    string | null | undefined
  >();

  useEffect(() => {
    setTimeout(() => {
      setActiveMenuDelayed(activeMenu);
    }, 400);
  }, [activeMenu]);

  return (
    <div id={modalStyles.modalContainer}>
      <div className="container">
        <div
          ref={props.modal}
          id={modalStyles.modal}
          className={`
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
            <div id={modalStyles.modalInner}>
              <AnimatePresence>
                {returnHeader(activeMenu, FirstPositionDomain, windowSize)}
                {returnContent(activeMenu, activeMenuDelayed)}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function returnHeader(
  am: string | null | undefined,
  fpd: string | string[] | undefined,
  windowSize: string
) {
  switch (true) {
    case fpd === "shop" && am === "navMenu" && windowSize !== "small":
      return <ShopMenu key={"shopMenu"} />;

    case fpd === "shop" && am === null && windowSize !== "small":
      return <ShopMenu key={"shopMenu"} />;

    case am === null && windowSize !== "small":
      return <NavBar key={"navBar"} />;

    default:
      return null;
  }
}

function returnContent(am: string | null, amd: string | null | undefined) {
  switch (amd) {
    case "basketMenu":
      return <Basket key={"basket"} />;

    case "navMenu":
      return <NavMenu key={"navMenu"} />;

    case "mobileMenu":
      return <MobileMenu key={"mobileMenu"} />;

    case "searchList":
      return <SearchList key={"searchList"} am={am} />;

    default:
      return null;
  }
}
