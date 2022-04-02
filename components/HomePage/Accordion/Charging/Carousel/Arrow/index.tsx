// styles
import arrowStyles from "./Arrow.module.css";

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
        <i className="bi bi-chevron-left"></i>
      ) : (
        <i className="bi bi-chevron-right"></i>
      )}
    </div>
  );
}
