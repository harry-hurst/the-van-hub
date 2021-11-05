// react
import { useContext, useState, useEffect } from "react";
import { HeaderContext } from "../../../../context/HeaderContextComponent";
import { ShopifyContext } from "../../../../context/ShopifyContextComponent";

// styles
import navMenuStyles from "./NavMenu.module.css";

// modules
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const container = {
  hidden: {
    // y: "30%",
  },
  visible: {
    // y: 0,
  },
};

const item = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "tween",
    },
  },
};

export default function NavMenu() {
  // useContext
  const { headerMenusState, currentCollectionId } = useContext(HeaderContext);
  const { client } = useContext(ShopifyContext);

  // useState
  const [collection, setCollection] = useState<any>();

  // useEffect
  useEffect(() => {
    // run once on first component mount
    client.collection
      .fetchWithProducts(currentCollectionId, { productsFirst: 10 })
      .then((retrievedCollection: any) => {
        // save to state
        setCollection(retrievedCollection);
      });
  }, [currentCollectionId]);

  return (
    <AnimatePresence>
      {headerMenusState.navMenu && (
        <AnimateSharedLayout>
          <motion.div
            layout
            variants={container}
            initial="hidden"
            animate="visible"
            id={navMenuStyles.container}
          >
            {collection &&
              collection.products.map((product: { title: string }) => (
                <NavMenuItem key={product.title} title={product.title} />
              ))}
          </motion.div>
        </AnimateSharedLayout>
      )}
    </AnimatePresence>
  );
}

function NavMenuItem(props: { title: string; key: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div
      layout
      key={props.key}
      variants={item}
      onClick={toggleOpen}
      id={navMenuStyles.item}
    >
      <motion.div layout>{props.title}</motion.div>
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.div>
  );
}

function Content() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      temporary content
    </motion.div>
  );
}
