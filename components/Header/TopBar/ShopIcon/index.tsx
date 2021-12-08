// styles
import shopIconStyles from "./ShopIcon.module.css";

// react
import { useContext } from "react";
import { ScreenSizeContext } from "../../../../context/ScreenSize";

// next components
import Link from "next/link";

export default function ShopIcon() {
  const { windowSize } = useContext(ScreenSizeContext);

  if (windowSize === "large" || windowSize === "medium") {
    return (
      <Link href="/shop">
        <div id={shopIconStyles.container}>
          <span id={shopIconStyles.icon}>SHOP</span>
        </div>
      </Link>
    );
  } else return null;
}
