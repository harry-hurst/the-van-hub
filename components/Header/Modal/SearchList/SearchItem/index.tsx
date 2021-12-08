// react
import { useState, useEffect } from "react";

// redux
import { useDispatch } from "react-redux";
import { clearActiveMenu } from "../../../../../state/activeMenuSlice";

// styles
import searchItemStyles from "./SearchItem.module.css";

// next components
import Link from "next/link";

// modules
import { motion } from "framer-motion";
import { searchListItem } from "../../../../../framer_motion/variants/searchList";

export default function SearchListItem(props: {
  title: string;
  productId: string;
  searchTerm: string;
}) {
  // redux
  const dispatch = useDispatch();

  const [splitTitleArray, setSplitTitleArray] = useState<string[]>();

  // when search term changes
  useEffect(() => {
    const Array = props.title
      .toLowerCase()
      .split(props.searchTerm.toLowerCase());
    setSplitTitleArray(Array);
  }, [props.searchTerm]);

  return (
    <Link href={`/search/${props.title}?productId=${props.productId}`}>
      <motion.div
        variants={searchListItem}
        id={searchItemStyles.item}
        onClick={() => dispatch(clearActiveMenu())}
      >
        <span>
          {splitTitleArray &&
            splitTitleArray.map((titleFragment, index) => (
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
