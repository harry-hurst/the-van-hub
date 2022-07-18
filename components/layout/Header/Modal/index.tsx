import modalStyles from "./Modal.module.css";

import { useContext } from "react";

import { ScreenSizeContext } from "../../../../context/ScreenSize";

import { useSelector } from "react-redux";
import { RootState } from "../../../../state/store";

import { navHeadings, shopHeadings } from "../../../../data/headings";

import Arrow from "./Arrow";
import Nav from "./Nav";
import Basket from "./Basket";
import SearchList from "./SearchList";
import About from "../../../../components/HomePage/Accordion/About";
import Charging from "../../../../components/HomePage/Accordion/About";

import { useRouter } from "next/router";

const Modal = (props: { modalRef: any }) => {
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);

  // global screen size variable.
  const { windowSize } = useContext(ScreenSizeContext);

  const router = useRouter();
  const { FirstPositionDomain } = router.query;

  return (
    <div className="container">
      <div
        ref={props.modalRef}
        id={modalStyles.modal}
        className={`rounded-2
        ${activeMenu !== null && `${modalStyles.modalExpanded}`}
        ${
          windowSize === "mobile" &&
          activeMenu === null &&
          `${modalStyles.modalCollapsed}`
        }
        `}
      >
        <Arrow />

        <div
          id={modalStyles.modalCover}
          className={`rounded-2
              ${
                windowSize === "mobile" &&
                activeMenu === null &&
                `${modalStyles.noPadding}`
              }
             `}
        >
          <div id={modalStyles.modalInner}>
            {returnModalContent(activeMenu, windowSize, FirstPositionDomain)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

function returnModalContent(
  am: string | null,
  ws: string,
  FirstPositionDomain: string | string[] | undefined
) {
  switch (am) {
    case "basketMenu":
      return <Basket key={"basket"} />;

    case "searchList":
      return <SearchList key={"searchList"} am={am} />;

    case "navMenu":
      return (
        <>
          <About />
          <Charging />
        </>
      );

    default:
      return (
        <Nav
          windowSize={ws}
          headings={FirstPositionDomain === "shop" ? shopHeadings : navHeadings}
        />
      );
  }
}
