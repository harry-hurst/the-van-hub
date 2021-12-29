// styles
import carousalStyles from "./Carousal.module.css";

// react
import { useState } from "react";

// components
import Arrow from "./Arrow";

import Transporter from "./Transporter";
import Sprinter from "./Sprinter";

export default function Carousel() {

  const [slideIndex, setSlideIndex] = useState<number>(0);

  return (
    <div className="container">
      <div id={carousalStyles.container} >
        
        <Transporter slideIndex={slideIndex} />
        <Sprinter slideIndex={slideIndex} />

        <Arrow
          type="left"
          slideIndex={slideIndex}
          setSlideIndex={setSlideIndex}
        />

        <Arrow
          type="right"
          slideIndex={slideIndex}
          setSlideIndex={setSlideIndex}
        />
      </div>
    </div>
  );
}
