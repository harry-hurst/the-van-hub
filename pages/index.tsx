// import type { NextPage } from "next";

// components
import Tagline from "../components/HomePage/Tagline";
import Carousal from "../components/HomePage/Carousel";
import Accordion from "../components/HomePage/Accordion";

export default function HomePage() {
  return (
    <div>
      <Tagline>Quality electrical components for your conversion!</Tagline>
      <Carousal />
      <Tagline>Upgrade your battery</Tagline>
      <Accordion />
    </div>
  );
}
