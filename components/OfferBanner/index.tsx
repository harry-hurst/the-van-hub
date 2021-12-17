// styles
import offerBannerStyles from "./OfferBanner.module.css";

// react
import React from "react";

// next components
import Link from "next/link";

// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";

import { hideBanner } from "../../state/bannerStatusSlice";

// svg
import RightArrow from "../../assets/svg/RightArrow";
import Close from "../../assets/svg/Close";

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
            <div id={offerBannerStyles.message}>
              <span>
                -20% All Batteries!
                <RightArrow />
              </span>
            </div>
          </Link>

          <div
            id={offerBannerStyles.close}
            onClick={() => {
              dispatch(hideBanner());
            }}
          >
<Close />
          </div>
        </div>
      </div>
    );
  else return null;
}
