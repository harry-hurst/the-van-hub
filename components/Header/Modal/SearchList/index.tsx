// styles
import searchMenuStyles from "./SearchMenu.module.css";

// react
import { useState, useEffect, useContext } from "react";
import { ShopifyContext } from "../../../../context/Shopify";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../../../state/store";

// components
import SearchItem from "./SearchItem";

// modules
import { motion, AnimatePresence } from "framer-motion";
import { searchList } from "../../../../framer_motion/variants/searchList";

export default function SearchList() {
  // redux
  const searchTerm = useSelector((state: RootState) => state.searchTerm.term);

  // useContext
  const { client } = useContext(ShopifyContext);

  // save all products into component state
  const [allProducts, setAllProducts] = useState<any | undefined>();

  useEffect(() => {
    client.product.fetchAll().then((products: any) => {
      setAllProducts(products);
    });
  }, []);

  return (
    <motion.div
      variants={searchList}
      initial="hidden"
      animate="visible"
      exit="hidden"
      custom={"100%"}
      id={searchMenuStyles.container}
    >
      {allProducts &&
        allProducts.map((product: { title: string; id: string }) => {
          // condition to return
          return (
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) && (
              <SearchItem
                key={product.id}
                productId={product.id}
                title={product.title}
                searchTerm={searchTerm}
              />
            )
          );
        })}
    </motion.div>
  );
}
