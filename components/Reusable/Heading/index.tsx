// styles
import headingStyles from "./Heading.module.css";

export default function Heading(props: {
  children: React.ReactNode;
  heading: string;
}) {
  return (
    <>
      <h1 id={headingStyles.heading}>{props.heading}</h1>
      <p id={headingStyles.paragraph}>{props.children}</p>
    </>
  );
}
