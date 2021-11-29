// react
import { useState } from "react";

// styles
import navMenuItemStyles from "./NavMenuItem.module.css";

// components
import ExpandedContent from "./ExpandedContent";

// modules
import { motion, AnimatePresence } from "framer-motion";


export default function NavMenuItem(props: { title: string, imgSrc: string, stock: boolean, productId: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div
      layout

      onClick={toggleOpen}
      id={navMenuItemStyles.item}
    >
      <motion.div layout>{props.title}</motion.div>
      <AnimatePresence>{isOpen && <ExpandedContent productId={props.productId} title={props.title} stock={props.stock} imgSrc={props.imgSrc}/>}</AnimatePresence>
    </motion.div>
  );
}


