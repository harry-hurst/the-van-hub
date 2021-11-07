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
    opacity: 0,
    y: "10%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      // delay: 0.2,
      duration: 1,
    },
  },
};

export default function NavMenu() {
  // useContext
  const { headerMenusState, currentCollectionId } = useContext(HeaderContext);
  const { client } = useContext(ShopifyContext);

  // useState
  const [collection, setCollection] = useState<any>();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (headerMenusState.navMenu) {
      setTimeout(() => {
        setOpen(true);
      }, 200);
    } else {
      setOpen(false);
    }
  }, [headerMenusState.navMenu]);

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
      {open && (
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
              collection.products.map(
                (
                  product: {
                    title: string;
                    variants: any;
                    availableForSale: boolean;
                    id: string;
                  },
                  index: number
                ) => (
                  <NavMenuItem
                    key={index}
                    productId={product.id}
                    stock={product.availableForSale}
                    title={product.title}
                    imgSrc={product.variants[0].image.src}
                  />
                )
              )}
          </motion.div>
        </AnimateSharedLayout>
      )}
    </AnimatePresence>
  );
}
