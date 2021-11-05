// react
import { useContext, useState, useEffect } from "react";
import { HeaderContext } from "../../../../context/HeaderContextComponent";
import { ShopifyContext } from "../../../../context/ShopifyContextComponent";

// styles
import navComponentStyles from "./NavComponent.module.css";

// modules
import { motion, AnimatePresence } from "framer-motion";

const container = {
  hidden: {
    y: "20%",
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

const item = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "tween",
    },
  },
};

export default function MobileMenu() {
  // useContext
  const {
    headerMenusState,
    changeHeaderMenusState,
    small,
    changeCurrentCollectionId,
  } = useContext(HeaderContext);
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
      {((small && headerMenusState.navComponent) ||
        (!small &&
          !(
            headerMenusState.searchMenu ||
            headerMenusState.basketMenu 
          ))) && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          id={navComponentStyles.container}
        >
          {collections &&
            collections.map(
              (collection: { title: string; id: any }, index: number) => (
                <motion.div
                  key={index}
                  id={navComponentStyles.item}
                  variants={item}
                  onClick={() => {
                    changeCurrentCollectionId(collection.id);
                    changeHeaderMenusState("navMenu", true);
                  }}
                >
                  {collection.title}
                </motion.div>
              )
            )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
