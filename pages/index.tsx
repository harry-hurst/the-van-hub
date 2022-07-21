// import type { NextPage } from "next";

// next components
import Head from "next/head";

// components
import HeroBanner from "../components/Banners/HeroBanners";
import OfferBanner from "../components/Banners/OfferBanner";
import Slider from "../components/Reusable/ProductSlider";

const HomePage = () => {
  return (
    <>
    <Head>
      <title>The Van Hub</title>
    </Head>
      <HeroBanner />
      <OfferBanner />
      <Slider />
    </>
  );
};

export default HomePage;
