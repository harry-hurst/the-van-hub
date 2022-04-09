// styles
import logoComponentStyles from "./LogoComponent.module.css";

// modules
import { motion, AnimatePresence } from "framer-motion";

// next components
import Image from "next/image";
import Link from "next/link";

export default function LogoComponent() {

  return (
    <AnimatePresence initial={false}>
      <Link href="/">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          id={logoComponentStyles.container}
          className="me-3"
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
    </AnimatePresence>
  );
}
