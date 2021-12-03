// import type { NextPage } from "next";

// components
import Carousal from "../components/HomePage/Carousel";
import Accordion from "../components/HomePage/Accordion";

// modules
import { AnimateSharedLayout } from "framer-motion";

export default function HomePage() {
  return (
    <AnimateSharedLayout>
      <Carousal />
      <Accordion />
    </AnimateSharedLayout>
  );
}
