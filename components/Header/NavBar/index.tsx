// styles
import navBarStyles from "./NavBar.module.css";

// data
import { menuContent } from "../../../data/MenuContent";

export default function NavBar() {
  return (
    <div id={navBarStyles.navBarContainer}>
      <div
        id={navBarStyles.navBar}
        className="container"
      >
        {menuContent.map((item, index) => (
          <div id={navBarStyles.navBarItem} key={index}>{item.content}</div>
        ))}
      </div>
    </div>
  );
}
