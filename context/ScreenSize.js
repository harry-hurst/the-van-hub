import React, { useState, useEffect } from "react";
export const ScreenSizeContext = React.createContext();

export default function ScreenSizeContextComponent(props) {
  const [windowSize, setWindowSize] = useState();

  // set the window size
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 400) {
        setWindowSize("tiny");
      } else if (400 <= window.innerWidth && window.innerWidth < 576) {
        setWindowSize("small");
      } else if (576 <= window.innerWidth && window.innerWidth < 768) {
        setWindowSize("medium");
      } else if (768 <= window.innerWidth && window.innerWidth < 1200) {
        setWindowSize("large");
      } else if (1200 <= window.innerWidth) {
        setWindowSize("extraLarge");
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScreenSizeContext.Provider value={{ windowSize }}>
      {props.children}
    </ScreenSizeContext.Provider>
  );
}
