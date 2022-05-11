// styles
import searchListStyles from "./SearchMenu.module.css";

// react
import { useContext } from "react";
import { ShopifyContext } from "../../../../../context/Shopify";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../../../../state/store";

// components
import SearchItem from "./SearchItem";
import Spinner from "../../../../Reusable/Spinner";

// modules
import { motion, AnimateSharedLayout } from "framer-motion";
import { container } from "../../../../../framer_motion/variants/searchList";

export default function SearchList(props: { am: string | null }) {
  // redux
  const searchTerm = useSelector((state: RootState) => state.searchTerm.term);

  // useContext
  const { allProducts } = useContext(ShopifyContext);

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

  function returnResults() {
    // first create filteredProducts:
    var filteredProducts = allProducts.filter((product: { title: string }) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredProducts.length > 0 ? (
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
      <span id={searchListStyles.noResultsMessage} className="mt-5">
        No products found for "{searchTerm}"
      </span>
    );
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
      {allProducts ? returnResults() : <Spinner />}
    </motion.div>
  );
}
