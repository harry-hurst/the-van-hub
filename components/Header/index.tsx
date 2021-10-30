import ShopifyContextComponent from "../../context/ShopifyContextComponent";

// components
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import NavBarContextComponent from "../../context/NavBarContextComponent";

export default function Header() {
  return (
    <ShopifyContextComponent>
      <NavBarContextComponent>
        <TopBar />
        <NavBar />
      </NavBarContextComponent>
    </ShopifyContextComponent>
  );
}
