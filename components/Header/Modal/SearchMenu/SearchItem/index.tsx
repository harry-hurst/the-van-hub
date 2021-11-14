// react
import { useState, useEffect, useContext } from "react";
import { HeaderContext } from "../../../../../context/HeaderContextComponent";

// styles
import searchItemStyles from "./SearchItem.module.css";

// next components
import Link from "next/link";

export default function SearchItem(props: {
  title: string;
  productId: string;
  searchTerm: string;
}) {
  const [splitTitleArray, setSplitTitleArray] = useState<string[]>();

  // when search term changes
  useEffect(() => {
    const Array = props.title
      .toLowerCase()
      .split(props.searchTerm.toLowerCase());
    setSplitTitleArray(Array);
  }, [props.searchTerm]);

  const { changeHeaderMenusState } = useContext(HeaderContext);

  return (
    <Link href={`/${props.title}?productId=${props.productId}`}>
      <div
        id={searchItemStyles.item}
        onClick={() => {
          changeHeaderMenusState("searchMenu", false);
        }}
      >
        {splitTitleArray &&
          splitTitleArray.map((titleFragment, index) => (
            <>
              <span>{titleFragment}</span>
              {index + 1 < splitTitleArray.length && (
                <span className={searchItemStyles.highlighted}>
                  {props.searchTerm}
                </span>
              )}
            </>
          ))}
      </div>
    </Link>
  );
}
