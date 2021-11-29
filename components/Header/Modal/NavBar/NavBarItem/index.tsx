// styles
import navBarItemStyles from "./NavBarItem1.module.css";

// redux
import { useSelector, useDispatch } from "react-redux";
import { updateCollectionId } from "../../../../../state/collectionIdSlice";
import { changeMenu } from "../../../../../state/activeMenuSlice";
import { RootState } from "../../../../../state/store";

// modules
import { motion } from "framer-motion";
import { navBarItem } from "../../../../../framer_motion/variants/navBar";

export default function NavBarItem(props: { title: string; id: string }) {
  // redux
  const collectionId = useSelector((state: RootState) => state.collectionId.id);
  const dispatch = useDispatch();

  return (
    <motion.div
      id={navBarItemStyles.item}
      className={`${
        collectionId === props.id && `${navBarItemStyles.currentItem}`
      }`}
      variants={navBarItem}
      onClick={() => {
        dispatch(updateCollectionId(props.id));
        dispatch(changeMenu("navMenu"));
      }}
    >
      {props.title.toUpperCase()}
    </motion.div>
  );
}
