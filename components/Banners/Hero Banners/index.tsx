// styles
import offerBannerStyles from "./HomePageHeroBanner.module.css";

// react
import React from "react";

// next components
import Image from "next/image";

export default function HomeHeroBanner() {
  return (
    <div
      className="row"
      style={{ margin: "0", marginTop: "-140px" }}
    >
      <div
        className="col-sm-5 order-sm-2"
        id={offerBannerStyles.imageContainer}
      >
        <Image
          src="/images/wastwater.jpeg"
          layout="fill"
          objectFit="cover"
          alt="Logo"
          quality={100}
        />
      </div>

      <div className="col-sm-7 order-sm-1" id={offerBannerStyles.panel}>
        <div className={offerBannerStyles.wedge} />
        <div className="container">
          <h2 className="nun-sans">
            High quality Lithium Ion Batteries and electrical parts for your
            conversion.
          </h2>

          <p>
            We stock the best Quality LiFePO4 leisure batteries in various sizes
            as well as various other electrical parts and accessories that are
            essential for any good conversion.
          </p>
        </div>
      </div>
    </div>
  );
}
