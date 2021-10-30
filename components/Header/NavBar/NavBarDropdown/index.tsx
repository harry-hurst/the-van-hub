// react
import { useState, useEffect } from "react";

// component
import { DropdownMenu } from "../../../reusable/DropdownMenu";
import NavBarDropdownItem from "./NavBarDropdownItem";

export default function NavBarDropdown(props: { dropdownId: string; collectionId: string }) {
  const [currentMenu, setCurrentMenu] = useState("first-menu");
  const [menuHeight, setMenuHeight] = useState("120px");

  useEffect(() => {}, []);

  return (
    <DropdownMenu position="low" dropdownId={props.dropdownId}>
      <div style={{ height: menuHeight, border: "1px solid green" }}>
        the dropdown id is {props.dropdownId} and the collection id {props.collectionId}
      </div>
    </DropdownMenu>
  );
}
