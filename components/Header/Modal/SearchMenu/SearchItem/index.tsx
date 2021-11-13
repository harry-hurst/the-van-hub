// react
import { useContext } from "react";
import { HeaderContext } from "../../../../../context/HeaderContextComponent";

// styles
import searchItemStyles from "./SearchItem.module.css";

// next components
import Link from "next/link";

export default function SearchItem(props: {
  title: string;
  productId: string;
}) {
  const { changeHeaderMenusState, searchTerm } = useContext(HeaderContext);

  return (
    <>
      {props.title.toLowerCase().includes(searchTerm.toLowerCase()) && (
        <Link href={`/${props.title}?productId=${props.productId}`}>
          <div
            id={searchItemStyles.item}
            onClick={() => {
              changeHeaderMenusState("searchMenu", false);
            }}
          >
            <div id={searchItemStyles.title}>{props.title}</div>
          </div>
        </Link>
      )}
    </>
  );
}
