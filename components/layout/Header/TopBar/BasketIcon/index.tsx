// react
import { useContext } from "react";
import { ShopifyContext } from "../../../../../context/Shopify";

// components
import Basket from "../../../../../assets/svg/Basket";

// redux
import { useSelector, useDispatch } from "react-redux";
import { changeMenu, clearActiveMenu } from "../../../../../state/activeMenuSlice";
import { RootState } from "../../../../../state/store";

// styles
import basketIconStyles from "./BasketIcon.module.css";

export default function BasketIcon(props: { basket: any }) {
  // redux
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);

  const dispatch = useDispatch();

  // useContext
  const { basket } = useContext(ShopifyContext);

  function handleClick() {
    if (activeMenu !== "basketMenu") {
      dispatch(changeMenu("basketMenu"));
    } else {
      dispatch(clearActiveMenu());
    }
  }

  return (
    <div
      ref={props.basket}
      id={basketIconStyles.container}
      onClick={() => {
        handleClick();
      }}
    >
      <div>
        <span id={basketIconStyles.basketCount}>
          {basket && basket.lineItems ? basket.lineItems.length : 0}
        </span>

        <Basket />
      </div>
    </div>
  );
}
