// import type { NextPage } from "next";

// components
import Accordion from "../components/HomePage/Accordion";
import HeroBanner from "../components/Banners/HeroBanners";
import OfferBanner from "../components/Banners/OfferBanner";
import Slider from "../components/Reusable/Slider";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <OfferBanner />
      <Slider />
      <Accordion />
    </>
  );
};

export default HomePage;
