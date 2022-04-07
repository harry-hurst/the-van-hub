// styles
import headerStyles from "./Header.module.css";

// components
import TopBar from "./TopBar";
import Modal from "./Modal";

export default function Header(props: {
  burger: any;
  searchBar: any;
  basket: any;
  modal: any;
}) {
  return (
    <div id={headerStyles.container}>
      <TopBar
        burger={props.burger}
        searchBar={props.searchBar}
        basket={props.basket}
      />
      <Modal modal={props.modal} />
    </div>
  );
}
