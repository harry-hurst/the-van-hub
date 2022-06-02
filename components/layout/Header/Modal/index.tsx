// styles
import modalStyles from "./Modal.module.css";

// react
import { useContext } from "react";

// context
import { ScreenSizeContext } from "../../../../context/ScreenSize";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../../../state/store";

// components
import Arrow from "./Arrow";
import Nav from "./Nav";
import Basket from "./Basket";
import SearchList from "./SearchList";

export default function Modal(props: { modal: any }) {
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);

  // global screen size variable.
  const { windowSize } = useContext(ScreenSizeContext);

  return (
    <div className="container">
      <div
        ref={props.modal}
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
            {returnContent(activeMenu, windowSize)}
          </div>
        </div>
      </div>
    </div>
  );
}

function returnContent(am: string | null, ws: string) {
  switch (am) {
    case "basketMenu":
      return <Basket key={"basket"} />;

    case "searchList":
      return <SearchList key={"searchList"} am={am} />;

    default:
      return <Nav windowSize={ws} />;
  }
}
