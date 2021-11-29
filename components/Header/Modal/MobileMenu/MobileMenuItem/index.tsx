// redux
import { useDispatch } from "react-redux";
import { clearActiveMenu } from "../../../../../state/activeMenuSlice";

// styles
import mobileMenuItemStyles from "./MobileMenuItem.module.css";

// next components
import Link from "next/link";

// modules
import { motion } from "framer-motion";

export default function MobileMenuItem(props: {
  title: string;
  collectionId: string;
}) {
  // redux
  const dispatch = useDispatch();

  return (
    <Link href={`/${props.title}?collectionId=${props.collectionId}`}>
      <motion.div
        id={mobileMenuItemStyles.item}
        onClick={() => dispatch(clearActiveMenu())}
      >
        {props.title.toUpperCase()}
      </motion.div>
    </Link>
  );
}
