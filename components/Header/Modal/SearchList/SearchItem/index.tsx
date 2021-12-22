// react
import { useState, useEffect } from "react";

// style
import searchItemStyles from "./SearchItem.module.css";

// redux
import { useDispatch } from "react-redux";
import { clearActiveMenu } from "../../../../../state/activeMenuSlice";

// modules
import { motion } from "framer-motion";

// next components
import Link from "next/link";

export default function SearchItem(props: {
  title: string;
  searchTerm: string;
  id: string;
}) {
  // redux
  const dispatch = useDispatch();

  const [splitTitleArray, setSplitTitleArray] = useState<string[]>([]);

  // when search term changes
  useEffect(() => {
    const Array = props.title
      .toLowerCase()
      .split(props.searchTerm.toLowerCase());
    setSplitTitleArray(Array);
  }, [props.searchTerm]);

  return (
    <Link href={`/shop/search/${props.title}?productId=${props.id}`}>
      <motion.div
        layout
        key={props.id}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={searchItemStyles.item}
        onClick={() => dispatch(clearActiveMenu())}
      >
        <span>
          {splitTitleArray.map((titleFragment, index) => (
            <>
              {titleFragment}
              {index + 1 < splitTitleArray.length && (
                <span className={searchItemStyles.highlighted}>
                  {props.searchTerm}
                </span>
              )}
            </>
          ))}
        </span>
      </motion.div>
    </Link>
  );
}
