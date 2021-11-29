// react
import { useState } from "react";

// styles
import navMenuItemStyles from "./NavMenuItem.module.css";

// components
import HiddenContent from "./HiddenContent";

// modules
import { motion, AnimatePresence } from "framer-motion";
import { navMenuItem } from "../../../../../framer_motion/variants/navMenu";

export default function NavMenuItem(props: {
  title: string;
  imgSrc: string;
  stock: boolean;
  productId: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      layout
      variants={navMenuItem}
      onClick={toggleOpen}
      id={navMenuItemStyles.item}
    >
      <motion.div layout>
        {props.title}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <HiddenContent
            productId={props.productId}
            title={props.title}
            stock={props.stock}
            imgSrc={props.imgSrc}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
