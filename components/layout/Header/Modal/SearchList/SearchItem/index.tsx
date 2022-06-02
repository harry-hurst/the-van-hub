// react
import { useState, useEffect } from "react";

// style
import searchItemStyles from "./SearchItem.module.css";

// redux
import { useDispatch } from "react-redux";
import { clearActiveMenu } from "../../../../../../state/activeMenuSlice";

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

  // componentDidUpdate()
  useEffect(() => {
    var array = props.title.toLowerCase().split(props.searchTerm.toLowerCase());
    setSplitTitleArray(array);
  }, [props.searchTerm]);

  return (
    <Link href={`/shop/search/${props.title}?productId=${props.id}`}>
      <li
        key={props.id}
        className={`rounded-1 nun-sans ${searchItemStyles.item}`}
        onClick={() => dispatch(clearActiveMenu())}
      >
        {splitTitleArray &&
          splitTitleArray.map((titleFragment, index) => (
            <>
              {titleFragment}
              {index < splitTitleArray.length - 1 && (
                <span className="nun-sans-bold bg-light">{props.searchTerm}</span>
              )}
            </>
          ))}
      </li>
    </Link>
  );
}
