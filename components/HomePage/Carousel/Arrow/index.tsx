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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-chevron-left"
          viewBox="0 0 16 16"
          stroke="black"
          strokeWidth="0"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-chevron-right"
          viewBox="0 0 16 16"
          stroke="black"
          strokeWidth="0"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      )}
    </div>
  );
}
