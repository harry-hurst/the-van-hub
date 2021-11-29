// react
import { useContext, useState, useEffect } from "react";
import { ShopifyContext } from "../../../../context/Shopify";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../../../state/store";

// styles
import mobileMenuStyles from "./MobileMenu.module.css";

//components
import MobileMenuItem from "./MobileMenuItem";

// modules
import { motion, AnimatePresence } from "framer-motion";
import { mobileMenu } from "../../../../framer_motion/variants/mobileMenu";

export default function MobileMenu() {
  // redux
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);

  // useContext
  const { client } = useContext(ShopifyContext);

  // save collections into state.
  const [collections, setCollections] = useState<any | undefined>();

  // create time delay of 400ms for mounting component:
  const [present, setPresent] = useState<boolean>(false);

  useEffect(() => {
    if (activeMenu === "mobileMenu") {
      setTimeout(() => {
        setPresent(true);
      }, 400);
    } else {
      setTimeout(() => {
        setPresent(false);
      }, 200);
    }
  }, [activeMenu]);

  // useEffect
  useEffect(() => {
    // run once on first component mount
    client.collection.fetchAllWithProducts().then((collections: any) => {
      // save to state
      setCollections(collections);
    });
  }, []);

  return (
    <AnimatePresence>
      {present && (
        <motion.div
          variants={mobileMenu}
          initial="hidden"
          animate="visible"
          exit="hidden"
          id={mobileMenuStyles.mobileMenu}
        >
          {/* {collections &&
            collections.map((collection: { id: string; title: string }) => (
              <MobileMenuItem
                key={collection.id}
                title={collection.title}
                collectionId={collection.id}
              />
            ))}  */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
