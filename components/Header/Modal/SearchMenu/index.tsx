// react
import { useContext, useState, useEffect } from "react";
import { HeaderContext } from "../../../../context/HeaderContextComponent";
import { ShopifyContext } from "../../../../context/ShopifyContextComponent";

// styles
import searchMenuStyles from "./SearchMenu.module.css";

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

export default function SearchMenu() {
  // useContext
  const { headerMenusState } = useContext(HeaderContext);



  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (headerMenusState.searchMenu) {
      setTimeout(() => {
        setOpen(true);
      }, 2000);
    } else {
      setOpen(false);
    }
  }, [headerMenusState.searchMenu]);


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
            id={searchMenuStyles.container}
          >


            {/* {collection &&
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
              )} */}



          </motion.div>
        </AnimateSharedLayout>
      )}
    </AnimatePresence>
  );
}
