// react
import { useContext, useState, useEffect } from "react";
import { ScreenSizeContext } from "../../../../context/ScreenSize";
import { ShopifyContext } from "../../../../context/Shopify";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  updateCollectionId,
  clearCollectionId,
} from "../../../../state/collectionIdSlice";
import { RootState } from "../../../../state/store";

// styles
import navComponentStyles from "./NavComponent.module.css";

//components
import NavBarItem from "./NavBarItem";

// modules
import { motion, AnimatePresence } from "framer-motion";
import { navBar } from "../../../../framer_motion/variants/navBar";

export default function NavBar() {
  // redux
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);

  // useContext
  const { windowSize } = useContext(ScreenSizeContext);
  const { client } = useContext(ShopifyContext);

  // useState
  const [collections, setCollections] = useState<any | undefined>();

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
    <AnimatePresence>
      {(((activeMenu === null || activeMenu == "navMenu") &&
        windowSize === "medium") ||
        windowSize === "large") && (
        <motion.div
          variants={navBar}
          initial="hidden"
          animate="visible"
          exit="hidden"
          id={navComponentStyles.container}
        >
          {collections &&
            collections.map((collection: { id: string; title: string }) => (
              <NavBarItem
                key={collection.id}
                title={collection.title}
                id={collection.id}
              />
            ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
