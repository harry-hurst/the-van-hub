// react
import { useState, useEffect, useContext } from "react";
import { ShopifyContext } from "../../../../context/ShopifyContextComponent";
import { HeaderContext } from "../../../../context/HeaderContextComponent";

// styles
import mobileMenuStyles from "./MobileMenu.module.css";

// modules
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu() {
  const [collections, setCollections] = useState<any[]>();

  // useContext
  const { headerMenusState } = useContext(HeaderContext);
  const { client } = useContext(ShopifyContext);

  // useEffect
  useEffect(() => {
    loadCollections();
  }, []);

  async function loadCollections() {
    const collections = await client.collection.fetchAllWithProducts();
    setCollections(collections);
  }

  return (
    <AnimatePresence>
      {headerMenusState.burgerMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          id={mobileMenuStyles.mobileMenuContainer}
        >
          {collections &&
            collections.map((collection: { title: string }, index: number) => (
              <div key={index} id={mobileMenuStyles.mobileMenuItem}>{collection.title}</div>
            ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
