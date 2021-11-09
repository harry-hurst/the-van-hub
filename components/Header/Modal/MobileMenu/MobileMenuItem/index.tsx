// react
import { useContext } from "react";
import { HeaderContext } from "../../../../../context/HeaderContextComponent";

// styles
import mobileMenuItemStyles from "./MobileMenuItem.module.css";

// modules
import { motion } from "framer-motion";

const item = {
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

export default function MobileMenuItem(props: { title: string; id: string }) {
  // useContext
  const {
    changeHeaderMenusState,
    changeCurrentCollectionId,
  } = useContext(HeaderContext);

  return (
    <motion.div
      key={props.id}
      id={mobileMenuItemStyles.item}
      variants={item}
      onClick={() => {
        changeCurrentCollectionId(props.id);
        changeHeaderMenusState("navMenu", true);
      }}
    >
      {props.title.toUpperCase()}
    </motion.div>
  );
}
