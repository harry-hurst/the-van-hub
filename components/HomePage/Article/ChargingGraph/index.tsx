// styles
import chargingGraphStyles from "./ChargingGraph.module.css";

// next components
import Image from "next/image";

export default function ChargingGraph() {
  return (
    <div id={chargingGraphStyles.container}>
      <Image
        src="/images/charge-curve.png"
        layout="responsive"
        height={669}
        width={2048}
        quality={10}
        alt="Charging voltage curve"
      />

      <span
        style={{
          top: "-3%",
          left: "0",
        }}
        className={`${chargingGraphStyles.label} badge bg-light text-dark`}
      >
        14.6V
      </span>
      <span
        style={{
          top: "11%",
          right: "0",
        }}
        className={`${chargingGraphStyles.label} badge bg-light text-dark`}
      >
        14.0V
      </span>
      <span
        style={{
          top: "26%",
          right: "0",
        }}
        className={`${chargingGraphStyles.label} badge bg-light text-dark`}
      >
        13.2V
      </span>
      <span
        style={{
          top: "78%",
          right: "0",
        }}
        className={`${chargingGraphStyles.label} badge bg-light text-dark`}
      >
        0A
      </span>
      <span
        style={{
          top: "110%",
          left: "14%",
        }}
        className={`${chargingGraphStyles.label} ${chargingGraphStyles.translate} badge bg-dark`}
      >
        Bulk
      </span>
      <span
        style={{
          top: "110%",
          left: "40%",
        }}
        className={`${chargingGraphStyles.label} ${chargingGraphStyles.translate} badge bg-dark`}
      >
        Absorbtion
      </span>
      <span
        style={{
          top: "110%",
          left: "66%",
        }}
        className={`${chargingGraphStyles.label} ${chargingGraphStyles.translate} badge bg-dark`}
      >
        Float
      </span>
      <span
        style={{
          top: "110%",
          left: "91%",
        }}
        className={`${chargingGraphStyles.label} ${chargingGraphStyles.translate} badge bg-dark`}
      >
        Storage
      </span>
      <span
        style={{
          top: "60%",
          left: "44%",
        }}
        className={`${chargingGraphStyles.label} ${chargingGraphStyles.translate} badge bg-success`}
      >
        Current
      </span>
      <span
        style={{
          top: "20%",
          left: "40%",
        }}
        className={`${chargingGraphStyles.label} ${chargingGraphStyles.translate} badge bg-primary`}
      >
        Voltage
      </span>
    </div>
  );
}
