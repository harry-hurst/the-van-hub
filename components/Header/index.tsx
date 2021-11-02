// styles
import headerStyles from "./Header.module.css";

import ShopifyContextComponent from "../../context/ShopifyContextComponent";
import HeaderContextComponent from "../../context/HeaderContextComponent";

// components
import TopBar from "./TopBar";
import Modal from "./Modal";

export default function Header() {
  return (
    <div id={headerStyles.headerContainer}>
      <ShopifyContextComponent>
        <HeaderContextComponent>
          <TopBar />
          <Modal />
        </HeaderContextComponent>
      </ShopifyContextComponent>
    </div>
  );
}
