// styles
import modalStyles from "./Modal.module.css";

// react
import { useState, useEffect, useContext } from "react";

// context
import { ScreenSizeContext } from "../../../../context/ScreenSize";

// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../state/store";
import { clearCollectionId } from "../../../../state/collectionIdSlice";

// components
import Arrow from "./Arrow";

import NavBar from "./Headers/NavBar"; // main navigation bar component
import MobileMenu from "./MobileMenu"; // mobile navigation bar component

import ShopMenu from "./Headers/ShopMenu"; // shop navigation bar component

import NavMenu from "./NavMenu"; // pop-up secondary menu in /shop
import Basket from "./Basket"; // basket component
import SearchList from "./SearchList"; // search result component

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
    } else if (activeMenu === null && windowSize !== "tiny") {
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
    <div className="container">
      <div
        ref={props.modal}
        id={modalStyles.modal}
        className={` rounded-2
            ${modalState === "expanded" && `${modalStyles.modalExpanded}`}
            ${modalState === "collapsed" && `${modalStyles.modalCollapsed}`}
          `}
      >
        <Arrow />

        <div
          id={modalStyles.modalCover}
          className={`rounded-2
              ${modalState === "collapsed" && `${modalStyles.noPadding}`}
             `}
        >
          <div id={modalStyles.modalInner}>
            <AnimatePresence>
              {/* Return header component directly into modalInner */}
              {returnHeader(activeMenu, FirstPositionDomain, windowSize)}
              {/* Return content component directly into modalInner */}
              {returnContent(activeMenu, activeMenuDelayed)}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

// for the header of the modal (when the modal is a bar):
function returnHeader(
  am: string | null | undefined,
  fpd: string | string[] | undefined,
  windowSize: string
) {
  switch (true) {
    case fpd === "shop" && am === "navMenu" && windowSize !== "tiny":
      return <ShopMenu />;

    case fpd === "shop" && am === null && windowSize !== "tiny":
      return <ShopMenu />;

    case am === null && windowSize !== "tiny":
      return <NavBar key={"navBar"} />;

    default:
      return null;
  }
}

//  for the bulk of the modal content (when modal is opened):
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
