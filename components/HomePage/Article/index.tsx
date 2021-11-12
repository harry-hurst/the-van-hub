// styles
import articleStyles from "./Article.module.css";

// components
import Heading from "../../Reusable/Heading";

// next components
import Image from "next/image";

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

        <table id={articleStyles.comparisonTable}>
          <thead>
            <tr>
              <th>Lead Acid</th>
              <th></th>
              <th>Lithium Ion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>£10 / Ah</td>
              <td className={articleStyles.middleColumn}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-tag"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
                  <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z" />
                </svg>
                <br />
                Price
              </td>
              <td>£50 / Ah</td>
            </tr>
            <tr>
              <td>2000</td>
              <td className={articleStyles.middleColumn}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-repeat"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                  <path
                    fillRule="evenodd"
                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                  />
                </svg>
                <br />
                Cycle Life
              </td>
              <td>5000 +</td>
            </tr>
            <tr>
              <td>0.25kg / Ah</td>
              <td className={articleStyles.middleColumn}>Weight</td>
              <td>0.15kg / Ah</td>
            </tr>
            <tr id={articleStyles.lastRow}>
              <td>50% discharge</td>
              <td className={articleStyles.middleColumn}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-battery-half"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 6h5v4H2V6z" />
                  <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z" />
                </svg>
                <br />
                Discharge Fraction
              </td>
              <td>80% discharge</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id={articleStyles.colouredBackground}>
        <div className="container">
          <Heading heading="B2B Charging">
            Battery-to-Battery chargers draw current from the starter battery
            and step up the voltage to charge the second leisure battery. They
            provide a much deeper and faster re-charge than connecting directly
            to the alternator.
          </Heading>
          <div
            style={{
              width: "80%",
              margin: "1rem auto",
              position: "relative",
            }}
          >
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
                position: "absolute",
                top: "9%",
                left: "23%",
                fontSize: "1.2vw",
                borderRadius: "0",
              }}
              className="badge bg-dark"
            >
              Alternator
            </span>
            <span
              style={{
                position: "absolute",
                top: "79%",
                left: "37%",
                fontSize: "1.2vw",
                borderRadius: "0",
              }}
              className="badge bg-dark"
            >
              Starter Battery
            </span>
            <span
              style={{
                position: "absolute",
                top: "92%",
                right: "23%",
                fontSize: "1.2vw",
                borderRadius: "0",
              }}
              className="badge bg-dark"
            >
              Leisure Battery
            </span>
            <span
              style={{
                position: "absolute",
                top: "20%",
                left: "65%",
                fontSize: "1.2vw",
                borderRadius: "0",
              }}
              className="badge bg-dark"
            >
              Charger
            </span>
          </div>

          <div
            style={{
              width: "80%",
              margin: "4rem auto",
              position: "relative",
            }}
          >
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
                position: "absolute",
                top: "0",
                left: "0",
                fontSize: "1.5vw",
                color: "var(--test-grey)",
              }}
            >
              14.6V
            </span>
            <span
              style={{
                position: "absolute",
                top: "31%",
                left: "0",
                fontSize: "1.5vw",
                color: "var(--test-grey)",
              }}
            >
              0.2CA*
            </span>
            <span
              style={{
                position: "absolute",
                top: "77%",
                left: "0",
                fontSize: "1.5vw",
                color: "var(--test-grey)",
              }}
            >
              0.02CA
            </span>
            <span
              style={{
                position: "absolute",
                top: "14%",
                right: "0",
                fontSize: "1.5vw",
                color: "var(--test-grey)",
              }}
            >
              14.0V
            </span>
            <span
              style={{
                position: "absolute",
                top: "29%",
                right: "0",
                fontSize: "1.5vw",
                color: "var(--test-grey)",
              }}
            >
              13.2V
            </span>
            <span
              style={{
                position: "absolute",
                top: "82%",
                right: "0",
                fontSize: "1.5vw",
                color: "var(--test-grey)",
              }}
            >
              0A
            </span>
            <span
              style={{
                position: "absolute",
                top: "110%",
                left: "14%",
                transform: "translate(-50%, -50%)",
                fontSize: "1.2vw",
                border: "1px solid var(--test-grey)",
                color: "var(--test-grey)",
                padding: "0.4rem",
                borderRadius: "var(--border-radius)",
              }}
            >
              Bulk
            </span>
            <span
              style={{
                position: "absolute",
                top: "110%",
                left: "40%",
                transform: "translate(-50%, -50%)",
                fontSize: "1.2vw",
                border: "1px solid var(--test-grey)",
                color: "var(--test-grey)",
                padding: "0.4rem",
                borderRadius: "var(--border-radius)",
              }}
            >
              Absorbtion
            </span>
            <span
              style={{
                position: "absolute",
                top: "110%",
                left: "66%",
                transform: "translate(-50%, -50%)",
                fontSize: "1.2vw",
                border: "1px solid var(--test-grey)",
                color: "var(--test-grey)",
                padding: "0.4rem",
                borderRadius: "var(--border-radius)",
              }}
            >
              Float
            </span>
            <span
              style={{
                position: "absolute",
                top: "110%",
                left: "91%",
                transform: "translate(-50%, -50%)",
                fontSize: "1.2vw",
                border: "1px solid var(--test-grey)",
                color: "var(--test-grey)",
                padding: "0.4rem",
                borderRadius: "var(--border-radius)",
              }}
            >
              Storage
            </span>
            <span
              style={{
                position: "absolute",
                top: "47%",
                left: "20%",
                transform: "translateY(-50%)",
                fontSize: "1.5vw",
                color: "#33a240ff",
              }}
            >
              Current
            </span>
            <span
              style={{
                position: "absolute",
                top: "4%",
                left: "31%",
                transform: "translateY(-50%)",
                fontSize: "1.5vw",
                color: "#1c88edff",
              }}
            >
              Voltage
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
