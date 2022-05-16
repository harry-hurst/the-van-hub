// redux
import { useSelector, useDispatch } from "react-redux";
import {
  changeMenu,
  clearActiveMenu,
} from "../../../../state/activeMenuSlice";
import { RootState } from "../../../../state/store";

// styles
import burgerIconStyles from "./BurgerIcon.module.css";

export default function BurgerIcon(props: { burger: any }) {
  // redux
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);
  const dispatch = useDispatch();

  function handleClick() {
    if (activeMenu !== "navMenu") {
      dispatch(changeMenu("navMenu"));
    } else {
      dispatch(clearActiveMenu());
    }
  }

  return (
    <div
      ref={props.burger}
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
