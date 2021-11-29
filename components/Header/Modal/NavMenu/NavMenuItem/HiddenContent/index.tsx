// styles
import expandedContentStyles from "./HiddenContent.module.css";

// next component
import Image from "next/image";
import Link from "next/link";

// modules
import { motion } from "framer-motion";
import { hiddenContent } from "../../../../../../framer_motion/variants/navMenu";

// redux
import { useDispatch } from "react-redux";
// import { Dispatch } from "redux";

import { clearActiveMenu } from "../../../../../../state/activeMenuSlice";
import { clearCollectionId } from "../../../../../../state/collectionIdSlice";

export default function ExpandedContent(props: {
  imgSrc: string;
  stock: boolean;
  productId: string;
  title: string;
}) {
  const dispatch = useDispatch();
  return (
    <motion.div
      layout
      id={expandedContentStyles.container}
      variants={hiddenContent}
      initial="hidden"
      animate="visible"
      exit="hidden"
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

        <div>
          {props.stock ? (
            <span className="badge bg-success">In Stock</span>
          ) : (
            <span className="badge bg-danger">No Stock</span>
          )}
        </div>

        <Link href={`/search/${props.title}?productId=${props.productId}`}>
          <button
            type="button"
            className="btn btn-outline-primary"
            id={expandedContentStyles.button}
            onClick={() => {
              dispatch(clearActiveMenu());
              dispatch(clearCollectionId());
            }}
          >
            View Product
          </button>
        </Link>

      </div>
    </motion.div>
  );
}
