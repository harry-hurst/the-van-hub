// react
import { useContext } from "react";
import { HeaderContext } from "../../../../context/HeaderContextComponent"

// styles
import logoComponentStyles from "./LogoComponent.module.css";

// modules
import { motion, AnimatePresence } from "framer-motion";

// next components
import Image from "next/image";
import Link from "next/link";

export default function LogoComponent() {

  // useContext
  const { searchState } = useContext(HeaderContext);

  return (
    <AnimatePresence initial={false}>
      {!searchState && (
        <Link href="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            id={logoComponentStyles.logoContainer}
          >
            <Image src="/images/logo.png" layout="fill" objectFit="contain" alt="Logo" />
          </motion.div>
        </Link>
      )}
    </AnimatePresence>
  );
}
