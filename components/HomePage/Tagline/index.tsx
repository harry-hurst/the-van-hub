// styles
import homePageHeadingStyles from "./HomePageHeading.module.css";

export default function HomePageHeading(props: { children: React.ReactNode }) {
  return (
    <div className="container" id={homePageHeadingStyles.container}>
      <h4 id={homePageHeadingStyles.tagline}>
        {props.children}
      </h4>
    </div>
  );
}
