// react
import { useContext, useState, useEffect } from "react";
import { HeaderContext } from "../../../../context/HeaderContextComponent";
import { ShopifyContext } from "../../../../context/ShopifyContextComponent";

// styles
import mobileMenuStyles from "./MobileMenu.module.css";

//components
import MobileMenuItem from "./MobileMenuItem";

// modules
import { motion, AnimatePresence } from "framer-motion";

const container = {
  hidden: {
    y: "10%",
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.2,
      duration: 1,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export default function MobileMenu() {
  // useContext
  const { headerMenusState, small } = useContext(HeaderContext);
  const { client } = useContext(ShopifyContext);

  // useState
  const [collections, setCollections] = useState<any>();

  // useEffect
  useEffect(() => {
    // run once on first component mount
    client.collection
      .fetchAllWithProducts()
      .then((retrievedCollections: any) => {
        // save to state
        setCollections(retrievedCollections);
      });
  }, []);

  return (
    <AnimatePresence>

      {headerMenusState.mobileMenu && (
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          id={mobileMenuStyles.mobileMenu}
        >
          {collections &&
            collections.map((collection: { title: string; id: any }) => (
              <MobileMenuItem title={collection.title} id={collection.id} />
            ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
