// react
import { useState, useEffect, useContext } from "react";
import { ShopifyContext } from "../../../../context/ShopifyContextComponent";
import { HeaderContext } from "../../../../context/HeaderContextComponent";

// styles
import navBarStyles from "./NavBar.module.css";

// components
import NavBarItem from "./NavBarItem";

// modules
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  // useState
  const [collections, setCollections] = useState<any[]>();

  // useContext
  const { client } = useContext(ShopifyContext);
  const { headerMenusState } = useContext(HeaderContext);

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
      {!(headerMenusState.burgerMenu ||
        headerMenusState.searchMenu ||
        headerMenusState.basketMenu) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          id={navBarStyles.navBar}
        >
          {collections &&
            collections.map((collection: { title: string }, index: number) => (
              <NavBarItem productTitle={collection.title} key={index} />
            ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
