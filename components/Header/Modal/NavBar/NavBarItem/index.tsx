// styles
import navBarItemStyles from "./NavBarItem.module.css";

export default function NavBarItem(props: { productTitle: string }) {
  return <div id={navBarItemStyles.navBarItem}>{props.productTitle}</div>;
}
