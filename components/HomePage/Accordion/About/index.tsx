// styles
import aboutStyles from "./About.module.css";

// react
import { useState } from "react";

// components
import ComparisonTable from "./ComparisonTable";

// next components
import Link from "next/link";

// modules
import { motion, AnimatePresence } from "framer-motion";
import { hiddenContent } from "../../../../framer_motion/variants/accordion";

export default function About() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <motion.div layout id={aboutStyles.container}>
      <motion.h1 layout onClick={toggleOpen} id={aboutStyles.heading}>
        Lead Acid vs Lithium Ion
      </motion.h1>

      <AnimatePresence>
        {open && (
          <motion.div
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
              <Link href="All%20Batteries?collectionId=Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI3NzExMzU2OTQzMQ==">
                <button
                  type="button"
                  id={aboutStyles.buyButton}
                  className="btn btn-warning btn-lg"
                >
                  See Batteries
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
