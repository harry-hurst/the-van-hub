// styles
import burgerIconStyles from "./BurgerIcon.module.css";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  changeActiveMenu,
  clearActiveMenu,
} from "../../../../state/activeMenuSlice";
import { RootState } from "../../../../state/store";

export default function BurgerIcon(props: { burgerRef: any }) {
  // redux
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);

  const dispatch = useDispatch();

  function handleClick() {
    if (activeMenu !== "mobileNav") {
      dispatch(changeActiveMenu("mobileNav"));
    } else {
      dispatch(clearActiveMenu());
    }
  }

  return (
    <div
      ref={props.burgerRef}
      id={burgerIconStyles.container}
      onClick={() => handleClick()}
    >
      {activeMenu === "navMenu" ? (
        <i className="bi bi-x"></i>
      ) : (
        <i className="bi bi-list"></i>
      )}
    </div>
  );
}
