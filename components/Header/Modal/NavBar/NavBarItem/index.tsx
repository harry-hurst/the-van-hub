// react
import { useContext } from "react";
import { HeaderContext } from "../../../../../context/HeaderContextComponent";

// styles
import navBarItemStyles from "./navBarItem.module.css";

// modules
import { motion } from "framer-motion";

const navItem = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "tween",
    },
  },
};

export default function NavComponentItem(props: { title: string; id: string }) {
  // useContext
  const {
    headerMenusState,
    changeHeaderMenusState,
    currentCollectionId,
    changeCurrentCollectionId,
  } = useContext(HeaderContext);

  return (
    <motion.div
      key={props.id}
      id={navBarItemStyles.item}
      className={`${
        props.id === currentCollectionId &&
        headerMenusState.navMenu &&
        `${navBarItemStyles.currentItem}`
      }`}
      variants={navItem}
      onClick={() => {
        changeCurrentCollectionId(props.id);
        changeHeaderMenusState("navMenu", true);
      }}
    >
      {props.title.toUpperCase()}
    </motion.div>
  );
}
