// styles
import taglineStyles from "./Tagline.module.css";

export default function Tagline() {
  return (
    <div className="container" id={taglineStyles.container}>
      <h4 id={taglineStyles.tagline}>
        Quality electrical components for your conversion!
      </h4>
    </div>
  );
}
