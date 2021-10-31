import ShopifyContextComponent from "../../context/ShopifyContextComponent";
import HeaderContextComponent from "../../context/HeaderContextComponent";

// components
import TopBar from "./TopBar";
import Modal from "./Modal";

export default function Header() {
  return (
    <ShopifyContextComponent>
      <HeaderContextComponent>
        <TopBar />
        <Modal />
      </HeaderContextComponent>
    </ShopifyContextComponent>
  );
}
