export default function LeftArrow(props: {
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
      //   className="bi bi-chevron-right"
      viewBox={props.viewBox || "0 0 16 16"}
    > 
      <path
        fill-rule="evenodd"
        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
      />
    </svg>
  );
}
