// react
import { useContext, useState, useEffect } from "react";
import { HeaderContext } from "../../../../context/HeaderContextComponent";
import { ShopifyContext } from "../../../../context/ShopifyContextComponent";

// styles
import navMenuStyles from "./NavMenu.module.css";

// components
import NavMenuItem from "./NavMenuItem";

// modules
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const container = {
  hidden: {
    // y: "30%",
  },
  visible: {
    // y: 0,
  },
};

export default function NavMenu() {
  // useContext
  const { headerMenusState, currentCollectionId } = useContext(HeaderContext);
  const { client } = useContext(ShopifyContext);

  // useState
  const [collection, setCollection] = useState<any>();

  // useEffect
  useEffect(() => {
    // run once on first component mount
    client.collection
      .fetchWithProducts(currentCollectionId, { productsFirst: 10 })
      .then((retrievedCollection: any) => {
        // save to state
        setCollection(retrievedCollection);
      });
  }, [currentCollectionId]);

  return (
    <AnimatePresence>
      {headerMenusState.navMenu && (
        <AnimateSharedLayout>
          <motion.div
            layout
            variants={container}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            id={navMenuStyles.container}
          >
            {collection &&
              collection.products.map((product: { title: string, variants: any }, index: number) => (
                <NavMenuItem key={index} title={product.title} imgSrc={product.variants[0].image.src}/>
              ))}
          </motion.div>
        </AnimateSharedLayout>
      )}
    </AnimatePresence>
  );
}




