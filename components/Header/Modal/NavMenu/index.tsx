// react
import { useContext } from "react";
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

export default function NavMenu() {
  // redux
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);

  // useContext
  const { windowSize } = useContext(ScreenSizeContext);
  const { client } = useContext(ShopifyContext);

  




  return (
    <AnimatePresence>
      {activeMenu === "navMenu" && (
        <AnimateSharedLayout>
          <motion.div
            layout

            id={navMenuStyles.container}
            className={`
            ${
              !(windowSize === "small") &&
              !(activeMenu === "navMenu" || activeMenu === "basketMenu") &&
              `${navMenuStyles.small}`
            }
            
            `}
          >

temp
            {/* {collection &&
              collection.products.map((product, index) => (
                <NavMenuItem
                  key={index}
                  productId={product.id}
                  stock={product.availableForSale}
                  title={product.title}
                  imgSrc={product.variants[0].image.src}
                />
              ))} */}


          </motion.div>
        </AnimateSharedLayout>
      )}
    </AnimatePresence>
  );
}
