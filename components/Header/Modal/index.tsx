// react
import { useContext } from "react";
import { HeaderContext } from "../../../context/HeaderContextComponent";

// styles
import modalStyles from "./Modal.module.css";

// components
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";

export default function Modal() {
  const { headerMenusState } = useContext(HeaderContext);

  return (
    <div className="container">
      <div
        id={modalStyles.modal}
        className={`${
          (headerMenusState.burgerMenu ||
            headerMenusState.searchMenu ||
            headerMenusState.basketMenu) &&
          `${modalStyles.expanded}`
        }`}
      >


<NavBar />
<MobileMenu /> 





      </div>
    </div>
  );
}
