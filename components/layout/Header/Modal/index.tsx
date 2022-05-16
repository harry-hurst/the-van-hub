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

import NavBar from "./NavBar"; // main navigation bar component

import NavMenu from "./NavMenu"; // pop-up secondary menu in /shop
import Basket from "./Basket"; // basket component
import SearchList from "./SearchList"; // search result component

export default function Modal(props: { modal: any }) {
  // router used for getting data out of the url bar

  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);

  const dispatch = useDispatch();

  // global screen size variable.
  const { windowSize } = useContext(ScreenSizeContext);

  // modal can be expanded, collapsed or closed.
  const [modalState, setModalState] = useState<string>();

  // update modal state:
  useEffect(() => {
    // if there is an active menu that is not "navMenu", expand:

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
            {(windowSize !== "tiny" || activeMenu === "navMenu") && <NavBar windowSize={windowSize} />}
            {returnContent(activeMenu, activeMenuDelayed)}
          </div>
        </div>
      </div>
    </div>
  );
}

function returnContent(am: string | null, amd: string | null | undefined) {
  switch (amd) {
    case "basketMenu":
      return <Basket key={"basket"} />;

    case "searchList":
      return <SearchList key={"searchList"} am={am} />;

    default:
      return null;
  }
}
