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
import { mobileMenu } from "../../../../framer_motion/variants/mobileMenu";

export default function SearchList() {
  // redux
  const searchTerm = useSelector((state: RootState) => state.searchTerm.term);
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);

  // useContext
  const { client } = useContext(ShopifyContext);

  // save all products into component state
  const [allProducts, setAllProducts] = useState<any | undefined>();

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

  // create time delay of 400ms for mounting component:
  const [present, setPresent] = useState<boolean>(false);

  useEffect(() => {
    if (activeMenu === "searchList") {
      setTimeout(() => {
        setPresent(true);
      }, 400);
    } else {
      setTimeout(() => {
        setPresent(false);
      }, 200);
    }
  }, [activeMenu]);

  useEffect(() => {
    client.product.fetchAll().then((products: any) => {
      setAllProducts(products);
    });
  }, []);

  return (
    <AnimatePresence>
      {present && (
        <motion.div
          variants={searchList}
          initial="hidden"
          animate="visible"
          exit="hidden"
          custom={offset}
          id={searchMenuStyles.container}
        >
          {/* {allProducts &&
            allProducts.map((product: { title: string; id: string }) => {
              // condition to return
              return (
                product.title
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) && (
                  <SearchItem
                    key={product.id}
                    productId={product.id}
                    title={product.title}
                    searchTerm={searchTerm}
                  />
                )
              );
            })} */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
