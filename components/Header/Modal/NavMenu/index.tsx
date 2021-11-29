// react
import { useState, useEffect, useContext, Key } from "react";
import { ScreenSizeContext } from "../../../../context/ScreenSize";
import { ShopifyContext } from "../../../../context/Shopify";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../../../state/store";

// styles
import navMenuStyles from "./NavMenu.module.css";

// components
import NavMenuItem from "./NavMenuItem";

// modules
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { navMenu } from "../../../../framer_motion/variants/navMenu";

export default function NavMenu() {
  // redux
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);
  const collectionId = useSelector((state: RootState) => state.collectionId.id);

  // useContext
  const { windowSize } = useContext(ScreenSizeContext);
  const { client } = useContext(ShopifyContext);

  // fetch collection based on collectionId:
  const [collection, setCollection] = useState<any>();

  useEffect(() => {
    client.collection
      .fetchWithProducts(collectionId, { productsFirst: 10 })
      .then((collection: { products: any }) => {
        // Do something with the collection
        setCollection(collection);
      });
  }, [collectionId]);

    // create time delay of 400ms for mounting component:
    const [present, setPresent] = useState<boolean>(false);

    useEffect(() => {
      if (activeMenu === "navMenu") {
        setTimeout(() => {
          setPresent(true);
        }, 400);
      } else {
        setTimeout(() => {
          setPresent(false);
        }, 200);
      }
    }, [activeMenu]);

    // x-offset to pass to variants file:
    const [offset, setOffset] = useState<string>("100%");

    useEffect(() => {
      if (activeMenu === "mobileMenu") {
        setOffset("100%");
        // alert(" set to 100%");
      } else if (activeMenu === "basketMenu") {
        setOffset("-100%");
        // alert("set to -100%");
      }
    }, [activeMenu]);

  return (
    <AnimatePresence>
      {present && (
        <AnimateSharedLayout>
          <motion.div
            variants={navMenu}
            initial="hidden"
            animate="visible"
            exit="hidden"
            custom={offset}
            // layout
            id={navMenuStyles.container}
            className={`
            ${
              !(windowSize === "small") &&
              !(activeMenu === "navMenu" || activeMenu === "basketMenu") &&
              `${navMenuStyles.small}`
            }
            
            `}
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
      )}
    </AnimatePresence>
  );
}
