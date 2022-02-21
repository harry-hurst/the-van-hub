// styles
import shopMenuStyles from "./ShopMenu.module.css";

// react
import { useContext, useState, useEffect } from "react";
import { ShopifyContext } from "../../../../../context/Shopify";

//components
import ShopMenuItem from "./ShopMenuItem";

// modules
import { motion } from "framer-motion";
import { navBar } from "../../../../../framer_motion/variants/navBar";

export default function NavBar() {
  const { client } = useContext(ShopifyContext);

  // useState
  const [collections, setCollections] = useState<any[] | undefined>();

  // useEffect
  useEffect(() => {
    // run once on first component mount
    client.collection
      .fetchAllWithProducts()
      .then((retrievedCollections: any) => {
        // save to state
        setCollections(retrievedCollections);
      });
  }, []);

  return (
    <ul
      // variants={navBar}
      // initial="hidden"
      // animate="visible"
      // exit="hidden"
      id={shopMenuStyles.container}
    >
      {collections &&
        collections.map((collection: { id: string; title: string }) => (
          <ShopMenuItem
            key={collection.id}
            title={collection.title}
            id={collection.id}
          />
        ))}
    </ul>
  );
}
