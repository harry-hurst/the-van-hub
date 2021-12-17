export default function RightArrow(props: {
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
  viewBox?: string;
}) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "14"}
    height={props.height || "14"}
    fill={props.fill || "currentColor"}
    stroke={props.stroke || "currentColor"}
    strokeWidth={props.strokeWidth || "1px"}
    //   className="bi bi-chevron-left"
    viewBox={props.viewBox || "0 0 16 16"}
    >
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );
}
