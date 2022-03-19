// styles
import searchListStyles from "./SearchMenu.module.css";

// react
import { useState, useEffect, useContext } from "react";
import { ShopifyContext } from "../../../../../context/Shopify";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../../../../state/store";

// components
import SearchItem from "./SearchItem";

// modules
import { motion, AnimateSharedLayout } from "framer-motion";
import { container } from "../../../../../framer_motion/variants/searchList";

export default function SearchList(props: { am: string | null }) {
  // redux
  const searchTerm = useSelector((state: RootState) => state.searchTerm.term);

  // useContext
  const { client } = useContext(ShopifyContext);

  // save all products into component state
  const [allProducts, setAllProducts] = useState<any>([]);
  const [filteredProducts, setFilteredProducts] = useState<any>([]);

  // save into state on initial render:
  useEffect(() => {
    client.product.fetchAll().then((products: any) => {
      setAllProducts(products);
    });
  }, []);

  // make a list of filtered search results that updates on change of searchTerm:
  useEffect(() => {
    // map through allProducts and push product to filteredProducts if includes searchTerm:
    // var can be overwritten on each useEffect.
    var filteredProducts = allProducts.filter((product: { title: string }) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filteredProducts);
  }, [allProducts, searchTerm]);

  function returnOffset() {
    // component mounting
    if (props.am === "searchList") {
      // component unmounting
    } else if (props.am === "mobileMenu") {
      return "100%";
    } else if (props.am === "basketMenu") {
      return "-100%";
    }
  }

  return (
    <motion.div
      variants={container}
      custom={returnOffset()}
      initial="initial"
      animate="show"
      exit="hidden"
      id={searchListStyles.container}
    >
      {filteredProducts.length > 0 ? (
        <AnimateSharedLayout>
          {filteredProducts.map((product: { title: string; id: string }) => (
            <SearchItem
              title={product.title}
              searchTerm={searchTerm}
              id={product.id}
              key={product.id}
            />
          ))}
        </AnimateSharedLayout>
      ) : (
        <span style={{ textAlign: "center"}}>Sorry, nothing found for <b>{searchTerm}</b></span>
      )}
    </motion.div>
  );
}
