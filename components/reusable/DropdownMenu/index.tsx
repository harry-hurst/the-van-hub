// react
import { useState, useEffect, useRef } from "react";

// styles
import dropdownMenuStyles from "./DropdownMenu.module.css";

// modules
import { motion, AnimatePresence } from "framer-motion";

export function DropdownMenu(props: {
  dropdownId: string;
  children: any;
  position: string;
}) {
  // useState
  const [open, setOpen] = useState(false); 

  // useRef
  const dropdown = useRef<HTMLDivElement>(null);

  // useEffect
  useEffect(() => {
    if (!open) return;

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [open]);

  function handleClick(event: { target: any }) {
    if (dropdown.current && !dropdown.current.contains(event.target)) {
      setOpen(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          id={dropdownMenuStyles.dropdownMenuContainer}
          className={`${
            props.position === "high" && `${dropdownMenuStyles.positionedHigh}`
          }
${props.position === "low" && `${dropdownMenuStyles.positionedLow}`}
`}
        >
          <div className="container">
            <div id={dropdownMenuStyles.dropdownMenu} ref={dropdown}>
              {props.children}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
