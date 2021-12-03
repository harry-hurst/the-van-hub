// styles
import chargingDiagramStyles from "./ChargingDiagram.module.css";

// next components
import Image from "next/image";

export default function ChargingDiagram() {
  return (
    <div id={chargingDiagramStyles.container}>
      <Image
        src="/images/B2B.png"
        layout="responsive"
        width={4130}
        height={2537}
        quality={10}
        alt="Battery charging diagram"
      />

      <span
        style={{
          top: "9%",
          left: "23%",
        }}
        className={`${chargingDiagramStyles.label} badge bg-dark`}
      >
        Alternator
      </span>
      <span
        style={{
          top: "79%",
          left: "37%",
        }}
        className={`${chargingDiagramStyles.label} badge bg-dark`}
      >
        Starter Battery
      </span>
      <span
        style={{
          top: "92%",
          right: "23%",
        }}
        className={`${chargingDiagramStyles.label} badge bg-dark`}
      >
        Leisure Battery
      </span>
      <span
        style={{
          top: "20%",
          left: "65%",
        }}
        className={`${chargingDiagramStyles.label} badge bg-dark`}
      >
        Charger
      </span>
    </div>
  );
}
