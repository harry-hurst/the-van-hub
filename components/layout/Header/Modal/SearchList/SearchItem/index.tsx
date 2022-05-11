// react
import { useState, useEffect } from "react";

// style
import searchItemStyles from "./SearchItem.module.css";

// redux
import { useDispatch } from "react-redux";
import { clearActiveMenu } from "../../../../../../state/activeMenuSlice";

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

  // create string array to store the sections of product title around search term:
  const [splitTitleArray, setSplitTitleArray] = useState<string[]>();

  // when search term changes
  useEffect(() => {
    var array = props.title.toLowerCase().split(props.searchTerm.toLowerCase());
    setSplitTitleArray(array);
  }, [props.searchTerm]);

  return (
    <Link href={`/shop/search/${props.title}?productId=${props.id}`}>
      <motion.div
        layout
        key={props.id}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`rounded-1 nun-sans ${searchItemStyles.item}`}
        onClick={() => dispatch(clearActiveMenu())}
      >
        {splitTitleArray &&
          splitTitleArray.map((titleFragment, index) => (
            <>
              <span>{titleFragment}</span>
              {index < splitTitleArray.length - 1 && (
                <span className="nun-sans-bold">{props.searchTerm}</span>
              )}
            </>
          ))}
      </motion.div>
    </Link>
  );
}
