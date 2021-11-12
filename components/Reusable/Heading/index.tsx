import headingStyles from "./Heading.module.css";

export interface LayoutProps {
  children: React.ReactNode;
  heading: string;
}

export default function Heading(props: LayoutProps) {
  return (
    <>
      <h1 id={headingStyles.heading}>{props.heading}</h1>
      <p id={headingStyles.paragraph}>{props.children}</p>
    </>
  );
}
