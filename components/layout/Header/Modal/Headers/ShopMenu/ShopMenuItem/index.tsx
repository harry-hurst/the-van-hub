// styles
import navBarItemStyles from "./NavBarItem1.module.css";

// redux
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import {
  updateCollectionId,
} from "../../../../../../../state/collectionIdSlice";
import {
  changeMenu,
  clearActiveMenu,
} from "../../../../../../../state/activeMenuSlice";
import { RootState } from "../../../../../../../state/store";

// modules
import { motion } from "framer-motion";
import { navBarItem } from "../../../../../../../framer_motion/variants/navBar";


export default function NavBarItem(props: { title: string; id: string }) {
  
  // redux
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);
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
        handleClick(props.id, collectionId, activeMenu, dispatch);
      }}
    >
      {props.title.toUpperCase()}
    </motion.div>
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
