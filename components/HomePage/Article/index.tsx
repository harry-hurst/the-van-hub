// styles
import articleStyles from "./Article.module.css";

// components
import Heading from "../../Reusable/Heading";
import ComparisonTable from "./ComparisonTable";
import ChargingDiagram from "./ChargingDiagram";
import ChargingGraph from "./ChargingGraph";

export default function BatteryArticle() {
  return (
    <>
      <div className="container">
        <Heading heading="Lead Acid vs Lithium Ion">
          Lithium Ion Leisure Batteries are becoming much more common in
          campervans and van conversions. This is due to the many advantages
          over Lead-Acid, AGM and Gel batteries - lighter weight, longer
          life-spans, greater discharge capacity etc.
        </Heading>
        <ComparisonTable />
      </div>

      <div id={articleStyles.lightBackground}>
        <div className="container">
          <Heading heading="B2B Charging">
            Battery-to-Battery chargers draw current from the starter battery
            and step up the voltage to charge the second leisure battery. They
            provide a much deeper and faster re-charge than connecting directly
            to the alternator.
          </Heading>
          <ChargingDiagram />
          <ChargingGraph />
        </div>
      </div>
    </>
  );
}
