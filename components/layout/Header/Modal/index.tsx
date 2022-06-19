// styles
import modalStyles from "./Modal.module.css";

// react
import { useContext } from "react";

// context
import { ScreenSizeContext } from "../../../../context/ScreenSize";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../../../state/store";

// use navHeadings for homepage and shopHeadings when in /shop:
import { navHeadings, shopHeadings } from "../../../../data/headings";

// components
import Arrow from "./Arrow";
import Nav from "./Nav";
import Basket from "./Basket";
import SearchList from "./SearchList";

// next components
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

    default:
      return (
        <Nav
          windowSize={ws}
          headings={FirstPositionDomain === "shop" ? shopHeadings : navHeadings}
        />
      );
  }
}
