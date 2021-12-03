// styles
import shopIconStyles from "./ShopIcon.module.css";

// react
import { useContext } from "react";
import { ScreenSizeContext } from "../../../../context/ScreenSize";

export default function ShopIcon() {
  const { windowSize } = useContext(ScreenSizeContext);

  if (windowSize === "large" || windowSize === "medium") {
    return (
      <div id={shopIconStyles.container}>
        <span id={shopIconStyles.icon}>SHOP</span>
      </div>
    );
  } else return null;
}
