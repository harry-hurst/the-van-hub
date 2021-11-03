// react
import { useState, useEffect, useContext } from "react";
import { HeaderContext } from "../../../../context/HeaderContextComponent";
import { ShopifyContext } from "../../../../context/ShopifyContextComponent";

// styles
import navMenuStyles from "./NavMenu.module.css";

// modules
import { motion, AnimatePresence } from "framer-motion";

export default function NavMenu() {
  //useState
  const [collection, setCollection] = useState<any>();

  // useContext
  const { headerMenusState, currentCollectionId } = useContext(HeaderContext);
  const { client } = useContext(ShopifyContext);

  //useEffect
  useEffect(() => {
    client.collection
      .fetchWithProducts(currentCollectionId)
      .then((retrievedCollection: any) => {
        // Do something with the collection
        setCollection(retrievedCollection);
      });
  }, [currentCollectionId]);

  return (
    <AnimatePresence>
      {headerMenusState.navMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          id={navMenuStyles.navMenuContainer}
        >
          {collection &&
            collection.products.map(
              (product: { title: string }, index: number) => (
                <span key={index}>{product.title}</span>
              )
            )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
