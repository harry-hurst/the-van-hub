import React, { useState, useEffect } from "react";
export const ScreenSizeContext = React.createContext();

export default function ScreenSizeContextComponent(props) {
  const [windowSize, setWindowSize] = useState();

  // ccomponentDidMount()
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 415) {
        setWindowSize("mobile");
      } else if (415 <= window.innerWidth && window.innerWidth < 912) {
        setWindowSize("tablet");
      } else if (912 <= window.innerWidth && window.innerWidth < 1240) {
        setWindowSize("laptop");
      } else if (1240 <= window.innerWidth) {
        setWindowSize("desktop");
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
