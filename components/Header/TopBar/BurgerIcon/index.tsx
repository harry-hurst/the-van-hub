// react
import { useContext } from "react";
import { TopBarContext } from "../../../../context/TopBarContext";

// styles
import burgerIconStyles from "./BurgerIcon.module.css";

// componenets
import { AnimatePresenceComponent } from "../../../reusable/AnimatePresenceComponent";
import { DropdownMenu } from "../../../reusable/DropdownMenu";

export default function BurgerIcon() {
  const { searchState, dropdownMenusState, changeDropdownMenusState } =
    useContext(TopBarContext);

  return (
    <AnimatePresenceComponent presence={!searchState} marginRightAuto={true} delayAppearanceTime={2}>
      <div
        id={burgerIconStyles.burgerIconContainer}
        onClick={() => {
          changeDropdownMenusState(
            "mobileMenu",
            !dropdownMenusState.mobileMenu
          );
        }}
      >
        {dropdownMenusState.mobileMenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        )}

        <AnimatePresenceComponent presence={dropdownMenusState.mobileMenu}>
          <i id={burgerIconStyles.dropdownArrow} />
        </AnimatePresenceComponent>

        <DropdownMenu presence={dropdownMenusState.mobileMenu}>
          Mobile Menu
        </DropdownMenu>
      </div>
    </AnimatePresenceComponent>
  );
}
