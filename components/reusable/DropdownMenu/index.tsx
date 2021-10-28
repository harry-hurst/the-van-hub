// styles
import dropdownMenuStyles from "./DropdownMenu.module.css";

//components
import { AnimatePresenceComponent } from "../AnimatePresenceComponent";

export function DropdownMenu(props: { presence: boolean; children: any }) {
  return (
    <AnimatePresenceComponent presence={props.presence}>
      <div id={dropdownMenuStyles.dropdownMenuContainer}>
        <div className="container">
          <div id={dropdownMenuStyles.dropdownMenu}>{props.children}</div>
        </div>
      </div>
    </AnimatePresenceComponent>
  );
}
