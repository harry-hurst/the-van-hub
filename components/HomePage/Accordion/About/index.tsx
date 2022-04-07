// styles
import aboutStyles from "./About.module.css";

// react
import { useState, useEffect, useContext, useRef } from "react";
import { ScreenSizeContext } from "../../../../context/ScreenSize";

// components
import ComparisonTable from "./ComparisonTable";

// next components
import Link from "next/link";

// modules
import { motion, AnimatePresence } from "framer-motion";
import { hiddenContent } from "../../../../framer_motion/variants/accordion";

export default function About(props: { accordian?: string | string[] }) {
  const [open, setOpen] = useState<boolean>();

  let mobileReference = useRef<any>(null);
  let reference = useRef<any>(null);

  const { windowSize } = useContext(ScreenSizeContext);

  useEffect(() => {
    if (props.accordian === "about") {
      setOpen(true);

      if (windowSize === "small") {
        setTimeout(() => {
          mobileReference.current.scrollIntoView();
        }, 800);
      } else if (windowSize === "medium") {
        setTimeout(() => {
          reference.current.scrollIntoView();
        }, 800);
      }
    } else {
      setOpen(false);
    }
  }, [props.accordian]);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <motion.div layout id={aboutStyles.container} className="bg-light rounded">
      <i id={aboutStyles.mobileScrollReference} ref={mobileReference} />
      <i id={aboutStyles.scrollReference} ref={reference} />
      <motion.h4 layout onClick={toggleOpen} id={aboutStyles.heading}>
        WHY Buy Lithium Ion{" "}
        <i
          className={`bi bi-chevron-down
            ${open && `${aboutStyles.rotate}`}
            `}
        ></i>
      </motion.h4>

      <AnimatePresence>
        {open && (
          <motion.div
          className="p-3"
            layout
            variants={hiddenContent}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <p id={aboutStyles.paragraph}>
              Lithium Ion Leisure Batteries are becoming much more common in
              campervans and van conversions. This is due to the many advantages
              over Lead-Acid, AGM and Gel batteries - lighter weight, longer
              life-spans, greater discharge capacity etc.
            </p>
            <ComparisonTable />
            <div
              style={{
                paddingBottom: "2rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link href="/shop/all-batteries?collectionId=Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI3NzExMzU2OTQzMQ==">
                <button
                  type="button"
                  className="btn btn-success btn-lg"
                  style={{ color: "var(--dark)" }}
                >
                  Shop our batteries
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
