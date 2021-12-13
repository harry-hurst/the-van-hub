// styles
import offerBannerStyles from "./OfferBanner.module.css";

// next components
import Link from "next/link";

// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";

import { hideBanner } from "../../state/bannerStatusSlice";

export default function Banner() {
  // redux
  const bannerStatus = useSelector(
    (state: RootState) => state.bannerStatus.status
  );

  const dispatch = useDispatch();

  if (bannerStatus)
    return (
      <div id={offerBannerStyles.container}>
        <div id={offerBannerStyles.inner} className="container">
          <Link href="/shop/All%20Batteries?collectionId=Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI3NzExMzU2OTQzMQ==">
            <div
              id={offerBannerStyles.message}
            >
              <span>
                -20% All Batteries!
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  stroke="currentColor"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </span>
            </div>
          </Link>

          <div
            id={offerBannerStyles.close}
            onClick={() => {
              dispatch(hideBanner());
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              stroke="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
              />
              <path
                fillRule="evenodd"
                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  else return null;
}
