// styles
import shopMenuStyles from "./ShopMenu.module.css";

// react
import { useContext, useState, useEffect } from "react";
import { ShopifyContext } from "../../../../../../context/Shopify";

// modules
import { motion } from "framer-motion";
// import { navBar } from "../../../../../../framer_motion/variants/navBar";

// variants
import { navBar } from "../../../../../../framer_motion/variants/navBar";
import { navBarItem } from "../../../../../../framer_motion/variants/navBar";

// redux
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { updateCollectionId } from "../../../../../../state/collectionIdSlice";
import {
  changeMenu,
  clearActiveMenu,
} from "../../../../../../state/activeMenuSlice";
import { RootState } from "../../../../../../state/store";

export default function ShopMenu() {
  // redux
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);
  const collectionId = useSelector((state: RootState) => state.collectionId.id);

  const dispatch = useDispatch();

  const { client } = useContext(ShopifyContext);

  // useState
  const [collectionss, setCollectionss] = useState<any[] | undefined>();

  // useEffect
  useEffect(() => {
    client.collection
      .fetchAllWithProducts()
      .then((retrievedCollections: any) => {
        // save to state
        setCollectionss(retrievedCollections);
      });
  }, []);

  return (
    <motion.ul
      variants={navBar}
      initial="hidden"
      animate="visible"
      exit="exit"
      id={shopMenuStyles.container}
    >
      {/* mapping through object in state with no problem */}
      {collectionss &&
        collectionss.map((collection: any, index: number) => (
          <motion.li
            key={index}
            className={`${shopMenuStyles.item} ${
              collectionId === collection.id && `${shopMenuStyles.currentItem}`
            }`}
            variants={navBarItem}
            onClick={() => {
              handleClick(collection.id, collectionId, activeMenu, dispatch);
            }}
          >
            {collection.title.toUpperCase()}
          </motion.li>
        ))}
    </motion.ul>
  );
}

function handleClick(
  id: string,
  collectionId: string | null,
  activeMenu: string | null,
  dispatch: Dispatch<any>
) {
  if (activeMenu !== "navMenu") {
    dispatch(changeMenu("navMenu"));
  }

  if (collectionId !== id) {
    dispatch(updateCollectionId(id));
  } else {
    // dispatch(clearCollectionId());
    dispatch(clearActiveMenu());
  }
}
