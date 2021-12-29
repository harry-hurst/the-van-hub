// styles
import arrowStyles from "./Arrow.module.css";

// svg
import LeftArrow from "../../../../assets/svg/LeftArrow";
import RightArrow from "../../../../assets/svg/RightArrow";

export default function Arrow(props: {
  slideIndex: number;
  type: string;
  setSlideIndex: Function;
}) {
  function leftArrowHandler() {
    props.setSlideIndex(0);
  }

  function rightArrowHandler() {
    props.setSlideIndex(1);
  }

  return (
    <div
      className={
        (props.slideIndex === 0 && props.type === "right") ||
        (props.slideIndex === 1 && props.type === "left")
          ? arrowStyles.sliderArrow
          : arrowStyles.sliderArrowFaint
      }
      id={
        props.type === "left" ? arrowStyles.leftArrow : arrowStyles.rightArrow
      }
      onClick={props.type === "left" ? leftArrowHandler : rightArrowHandler}
    >
      {props.type === "left" ? (
        <LeftArrow
          width="70"
          height="70"
          fill="var(--dark)"
          stroke="var(--dark)"
          strokeWidth="0px"
        />
      ) : (
        <RightArrow
          width="70"
          height="70"
          fill="var(--dark)"
          stroke="var(--dark)"
          strokeWidth="0px"
        />
      )}
    </div>
  );
}
