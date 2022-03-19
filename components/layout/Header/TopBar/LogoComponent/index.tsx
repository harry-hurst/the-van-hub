// styles
import logoComponentStyles from "./LogoComponent.module.css";

// react
import { useState, useEffect, useContext } from "react";
import { ScreenSizeContext } from "../../../../../context/ScreenSize";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../../../../state/store";

// modules
import { motion, AnimatePresence } from "framer-motion";

// next components
import Image from "next/image";
import Link from "next/link";

export default function LogoComponent() {
  // redux
  const searchBarStatus = useSelector(
    (state: RootState) => state.searchBar.status
  );

  // useState
  const [visible, setVisible] = useState<boolean>(false);

  // useEffect
  useEffect(() => {
    if (searchBarStatus === true) {
      setVisible(false);
    } else {
      setTimeout(() => {
        setVisible(true);
      }, 600);
    }
  }, [searchBarStatus]);

  // useContext
  const { windowSize } = useContext(ScreenSizeContext);

  return (
    <AnimatePresence initial={false}>
      {(visible || windowSize !== "small") && (
        <Link href="/">
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.4}} 
            id={logoComponentStyles.container}
          >
            <span id={logoComponentStyles.tm}>TM</span>
            <Image
              src="/images/logo.png"
              layout="fill"
              objectFit="contain"
              alt="Logo"
            />
          </motion.div>
        </Link>
      )}
    </AnimatePresence>
  );
}
