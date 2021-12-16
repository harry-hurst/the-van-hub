// styles
import sliderStyles from "./Slider.module.css";

// components
import SliderItem from "./SliderItem";

export default function Slider() {
  return (
    <div id={sliderStyles.sliderContainer}>
      <div id={sliderStyles.slider}>
        <div id={sliderStyles.sliderInner}>
          <SliderItem productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4NjUxNzMwODYzNTk=" />
          <SliderItem productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4NzczNDcyNTAzMjc=" />
          <SliderItem productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4NzQ1MTYxNjA2NjM=" />
          <SliderItem productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4NzcxNzI2NjI0MjM=" />
          <SliderItem productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4NzcyODg3NTk0NDc=" />
        </div>
      </div>
    </div>
  );
}
