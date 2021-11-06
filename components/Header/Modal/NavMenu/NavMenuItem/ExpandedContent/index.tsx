// styles
import expandedContentStyles from "./ExpandedContent.module.css";

// next component
import Image from "next/image";

// modules
import { motion } from "framer-motion";

export default function ExpandedContent(props: { imgSrc: string }) {
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
  temp
      </div>
    </motion.div>
  );
}
