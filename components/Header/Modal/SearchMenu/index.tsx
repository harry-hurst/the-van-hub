// react
import { useContext, useState, useEffect } from "react";
import { ShopifyContext } from "../../../../context/ShopifyContextComponent";
import { HeaderContext } from "../../../../context/HeaderContextComponent";

// styles
import searchMenuStyles from "./SearchMenu.module.css";

// components
import SearchItem from "./SearchItem";

// modules
import { motion, AnimatePresence } from "framer-motion";

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
  const { client } = useContext(ShopifyContext);
  const { headerMenusState } = useContext(HeaderContext);

  const [products, setProducts] = useState<any>();

  const [open, setOpen] = useState<boolean>();

  useEffect(() => {
    if (headerMenusState.searchMenu) {
      setTimeout(() => {
        setOpen(true);
      }, 200);
    } else {
      setOpen(false);
    }
  }, [headerMenusState.searchMenu]);

  useEffect(() => {
    client.product.fetchAll().then((fetchedProducts: any) => {
      setProducts(fetchedProducts);
    });
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          id={searchMenuStyles.container}
        >
          {products &&
            products.map(
              (
                product: {
                  title: string;
                  variants: any;
                  availableForSale: boolean;
                  id: string;
                },
                index: number
              ) => (
                <SearchItem
                  key={index}
                  productId={product.id}
                  title={product.title}
                />
              )
            )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
