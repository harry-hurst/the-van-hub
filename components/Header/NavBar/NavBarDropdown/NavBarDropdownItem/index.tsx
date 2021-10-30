// styles
import navBarDropdownItemStyles from "./NavBarDropdownItem.module.css";

// next components
import Image from "next/image";

export default function NavBarDropdownItem(props: { content: string }) {
  return (
    <div id={navBarDropdownItemStyles.container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5px"
        className="bi bi-chevron-left"
        viewBox="0 0 16 16"
        id={navBarDropdownItemStyles.previousArrow}
      >
        <path
          fillRule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
        />
      </svg>

      <div id={navBarDropdownItemStyles.thumbnailContainer}>
        <Image
          src="/images/battery_graphic.png"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>

      <span id={navBarDropdownItemStyles.content}>{props.content}</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5px"
        className="bi bi-chevron-right"
        viewBox="0 0 16 16"
        id={navBarDropdownItemStyles.nextArrow}
      >
        <path
          fillRule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
  );
}
