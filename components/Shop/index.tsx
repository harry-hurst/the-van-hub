// styles
import shopStyles from "./Shop.module.css";

// components
import Slider from "../Reusable/Slider";

export default function Shop() {
  return (
    <div id={shopStyles.container}>
      <div className="container">
        <h2 className="nun-sans">Main Products</h2>
      </div>
      <Slider />
    </div>
  );
}
