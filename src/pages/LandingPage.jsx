import React from "react";
import NavBar from "../components/navbar/navbar";
import Image from "../components/Image/image";

import Features from "../components/features/Features";
import Explore from "../components/explore/Explore";
import Pricing from "../components/pricing/Pricing";
import Magazine from "../components/magazine/Magazine";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/footer/Footer";
import Download from "../components/download/Download";
import Testimonial from "../components/testimonial/Testimonial";

export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <Image />
      <Features />
      <Explore />
      <Pricing />
      <Magazine />
      <FAQ />
      <Testimonial />
      <Download />
      <Footer />
    </div>
  );
}
