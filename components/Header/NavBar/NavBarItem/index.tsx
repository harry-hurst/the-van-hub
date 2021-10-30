

// styles
import navBarItemStyles from "./NavBarItem.module.css";

// modules
import { motion, AnimatePresence } from "framer-motion";

export default function NavBarItem(props: {
  content: string;
  dropdownId: string;
}) {


  return (
    <>
      <div
        id={navBarItemStyles.navBarItem}
        onClick={() => {

        }}
      >
        {props.content}

        <AnimatePresence>
          {false && (
            <motion.i
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              id={navBarItemStyles.dropdownArrow}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
