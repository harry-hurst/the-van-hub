// react
import { useContext } from "react";
import { HeaderContext } from "../../../../../../context/HeaderContextComponent";

// styles
import expandedContentStyles from "./ExpandedContent.module.css";

// next component
import Image from "next/image";
import Link from "next/link";

// modules
import { motion } from "framer-motion";

export default function ExpandedContent(props: {
  imgSrc: string;
  stock: boolean;
  productId: string;
  title: string;
}) {

  // useContext
  const { changeHeaderMenusState } = useContext(HeaderContext);

  return (
    <motion.div
      layout
      id={expandedContentStyles.expandedContent}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div id={expandedContentStyles.imageContainer}>
        <Image
          layout="fill"
          objectFit="contain"
          quality={5}
          src={props.imgSrc}
        />
      </div>
      <div id={expandedContentStyles.infoContainer}>
        {props.stock ? (
          <span className="badge bg-success">In Stock</span>
        ) : (
          <span className="badge bg-danger">No Stock</span>
        )}
      </div>
      <Link href={`/${props.title}?productId=${props.productId}`}>
        <button
          type="button"
          className="btn btn-outline-primary"
          id={expandedContentStyles.button}
          onClick={changeHeaderMenusState}
        >
          View Product
        </button>
      </Link>{" "}
    </motion.div>
  );
}
