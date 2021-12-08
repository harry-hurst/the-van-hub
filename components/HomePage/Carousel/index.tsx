// react
import React, { useState } from "react";

// styles
import carousalStyles from "./Carousal.module.css";

// components
import Arrow from "./Arrow";

import Transporter from "./Transporter";
import Sprinter from "./Sprinter";

// modules
import { motion } from "framer-motion";

export default function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <motion.div className="container">
      <div id={carousalStyles.container}>

        <Transporter slideIndex={slideIndex} />
        <Sprinter slideIndex={slideIndex} />

        <Arrow
          type={"left"}
          slideIndex={slideIndex}
          setSlideIndex={setSlideIndex}
        />

        <Arrow
          type={"right"}
          slideIndex={slideIndex}
          setSlideIndex={setSlideIndex}
        />
        
      </div>
    </motion.div>
  );
}
