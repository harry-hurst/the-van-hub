// styles
import shopStyles from "./Shop.module.css";

// components
import Slider from "./Slider";

export default function Shop() {
  return (
    <div id={shopStyles.container}>
      <div className="container">
        <h3>Main Products</h3>
      </div>
      <Slider />
    </div>
  );
}
