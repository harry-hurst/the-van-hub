// styles
import articleStyles from "./Article.module.css";

// components
import Heading from "../../Reusable/Heading";
import ComparisonTable from "./ComparisonTable";
import ChargingDiagram from "./ChargingDiagram";
import ChargingGraph from "./ChargingGraph";

// next components
import Link from "next/link";

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

        <div
          style={{
            paddingBottom: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link href="All%20Batteries?collectionId=Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI3NzExMzU2OTQzMQ==">
            <button type="button" className="btn btn-primary btn-lg">
              See Batteries
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1px"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </Link>
        </div>
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
