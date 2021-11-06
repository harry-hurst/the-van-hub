// styles
import carousalStyles from "./Carousal.module.css";

export default function Carousel() {
  return (
    <div className="container" id={carousalStyles.carousalContainer}>
      <div id={carousalStyles.carousal}></div>
    </div>
  );
}
