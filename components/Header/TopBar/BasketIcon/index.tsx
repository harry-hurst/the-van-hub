// react
import { useContext } from "react";
import { ShopifyContext } from "../../../../context/Shopify";

// redux
import { useSelector, useDispatch } from "react-redux";
import { changeMenu, clearActiveMenu } from "../../../../state/activeMenuSlice";
import { RootState } from "../../../../state/store";

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
        <svg viewBox="0 0 84.836929 73.094193" height="24px" width="31px">
          <g transform="translate(-12.065909,-105.65407)">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="7"
              d="m 72.274972,134.6357 c 5.436136,0.0927 10.130846,0.27798 13.250462,0.55594 3.119617,0.27797 4.663929,0.6486 5.733603,1.22058 1.069674,0.57197 1.710357,1.40486 1.988319,2.54781 0.277962,1.14295 0.216186,2.62549 -0.525141,6.57908 -0.741327,3.95359 -2.162063,10.37779 -3.428467,15.3198 -1.266404,4.942 -2.378287,8.40119 -4.324299,10.53231 -1.946013,2.13111 -4.725712,2.93414 -7.845322,3.33563 -3.11961,0.40149 -6.5788,0.40149 -10.408851,0.43238 -3.830051,0.0309 -7.783521,0.089 -12.230903,0.089 -4.447382,0 -8.52439,-0.06 -12.292673,-0.0899 -3.768283,-0.03 -7.227471,-0.03 -10.34708,-0.43147 -3.119608,-0.40149 -5.899313,-1.20452 -7.845325,-3.33563 -1.946013,-2.13112 -3.057895,-5.59031 -4.324299,-10.53231 -1.266405,-4.94201 -2.687142,-11.36621 -3.428468,-15.3198 -0.741326,-3.95359 -0.803099,-5.43613 -0.525137,-6.57908 0.277961,-1.14294 0.918648,-1.97584 1.98832,-2.54781 1.069672,-0.57198 2.613985,-0.94261 5.733602,-1.22058 3.119617,-0.27796 7.81432,-0.46328 13.250456,-0.55594 5.436136,-0.0927 11.613503,-0.0927 17.790604,-0.0927 6.177101,0 12.354464,0 17.790599,0.0927 z"
            />

            <path
              stroke="currentColor"
              strokeWidth="7"
              d="M 42.994471,109.15407 29.280717,133.43112"
              id="path851"
            />
            <circle
              fill="currentColor"
              id="path871"
              cx="42.994473"
              cy="109.15407"
              r="3.5"
            />
            <path
              stroke="currentColor"
              strokeWidth="7"
              id="path873"
              d="m 65.546679,109.15407 13.713754,24.27705"
            />
            <circle
              fill="currentColor"
              r="3.5"
              cy="109.15407"
              cx="-65.546677"
              id="circle875"
              transform="scale(-1,1)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
