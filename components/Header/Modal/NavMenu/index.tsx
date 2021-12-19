// react
import { useState, useEffect, useContext } from "react";
import { ShopifyContext } from "../../../../context/Shopify";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../../../state/store";

// styles
import navMenuStyles from "./NavMenu.module.css";

// components
import NavMenuItem from "./NavMenuItem";

// modules
import { motion, AnimateSharedLayout } from "framer-motion";
import { navMenu } from "../../../../framer_motion/variants/navMenu";

export default function NavMenu() {
  // redux
  const collectionId = useSelector((state: RootState) => state.collectionId.id);

  // useContext
  const { client } = useContext(ShopifyContext);

  // fetch collection based on collectionId:
  const [collection, setCollection] = useState<any>();

  useEffect(() => {
    client.collection
      .fetchWithProducts(collectionId)
      .then((collection: { products: any }) => {
        // Do something with the collection
        setCollection(collection);
      });
  }, [collectionId]);

  return (
    <AnimateSharedLayout>
      <motion.div
        variants={navMenu}
        initial="hidden"
        animate="visible"
        exit="hidden"
        id={navMenuStyles.container}
      >
        {collection &&
          collection.products.map(
            (product: {
              id: string;
              availableForSale: boolean;
              title: string;
              variants: { image: { src: string } }[];
            }) => (
              <NavMenuItem
                key={product.id}
                productId={product.id}
                stock={product.availableForSale}
                title={product.title}
                imgSrc={product.variants[0].image.src}
              />
            )
          )}
      </motion.div>
    </AnimateSharedLayout>
  );
}
