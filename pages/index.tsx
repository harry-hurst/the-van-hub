// import type { NextPage } from "next";

// components
import Accordion from "../components/HomePage/Accordion";
import HeroBanner from "../components/Banners/HeroBanners";
import OfferBanner from "../components/Banners/OfferBanner";
import Slider from "../components/Reusable/Slider";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <OfferBanner />
      <Slider />
      <Accordion />
    </>
  );
}
