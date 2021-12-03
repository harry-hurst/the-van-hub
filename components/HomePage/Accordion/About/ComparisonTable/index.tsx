// styles
import comparisonTableStyles from "./ComparisonTable.module.css";

export default function ComparisonTable() {
  return (
    <table id={comparisonTableStyles.comparisonTable}>

      <thead>
        <tr>
          <th>
            <span className="badge bg-primary">LEAD ACID</span>
          </th>
          <th></th>
          <th>
            <span className="badge bg-primary">LITHIUM ION</span>
          </th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <td>2000</td>
          <td className={comparisonTableStyles.middleColumn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.4px"
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
          <td className={comparisonTableStyles.middleColumn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 640 512"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.1px"
            >
              <path
                fill="currentColor"
                d="M104 96H56c-13.3 0-24 10.7-24 24v104H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v104c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm528 128h-24V120c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h24c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM456 32h-48c-13.3 0-24 10.7-24 24v168H256V56c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h128v168c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24z"
              ></path>
            </svg>
            <br />
            Weight
          </td>
          <td>0.15kg / Ah</td>
        </tr>
        <tr id={comparisonTableStyles.lastRow}>
          <td>50% discharge</td>
          <td className={comparisonTableStyles.middleColumn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.2px"
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
  );
}
