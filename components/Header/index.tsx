// styles
import headerStyles from "./Header.module.css";

// components
import ShopifyContextComponent from "../../context/ShopifyContextComponent";
import HeaderContextComponent from "../../context/HeaderContextComponent";

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
