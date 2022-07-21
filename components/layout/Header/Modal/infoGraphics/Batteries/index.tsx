// styles
import batteriesStyles from "./Batteries.module.css";

import { useDispatch } from "react-redux";
import { clearActiveMenu } from "../../../../../../state/activeMenuSlice";

// next components
import Link from "next/link";

export default function About() {
  const dispatch = useDispatch();
  const closeDropdown = () => {
    dispatch(clearActiveMenu());
  };

  return (
    <div id={batteriesStyles.container} className="bg-light rounded p-3">
      <table id={batteriesStyles.table}>
        <thead>
          <tr>
            <th>
              <span className="badge bg-secondary rounded-pill border border-primary border-2">
                Lead Acid
              </span>
            </th>
            <th></th>
            <th>
              <span className="badge bg-secondary rounded-pill border border-primary border-2">
                Lithium Ion
              </span>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <span>20</span>
            </td>
            <td>
              <i className="bi bi-repeat text-primary" />
              <br />
              <span className="text-secondary">Cycle Life</span>
            </td>
            <td>
              <span>5000 +</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0.25kg</span>{" "}
            </td>
            <td>
              <i className="bi bi-aspect-ratio text-primary" />
              <br />
              <span className="text-secondary">Space</span>
            </td>
            <td>
              <span>0.15kg /</span>
            </td>
          </tr>
          <tr id={batteriesStyles.lastRow}>
            <td>
              <span>50% discharge</span>
            </td>
            <td>
              <i className="bi bi-battery-half text-primary" />
              <br />
              <span className="text-secondary">Discharge Fraction</span>
            </td>
            <td>
              <span>80% discharge</span>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Link href="/shop/all-batteries?collectionId=Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI3NzExMzU2OTQzMQ==">
                <a
                  onClick={closeDropdown}
                  role="button"
                  className="btn btn-light text-secondary rounded-2 text-nowrap"
                >
                  Shop now
                </a>
              </Link>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
