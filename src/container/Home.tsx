"use client";

import React, { useState, useEffect } from "react";
import Hero from "@/components/Hero";
// import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
// import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
// import { testimonials } from "@/data/testimonials";

const Home = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.pageYOffset > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <>
      <Hero />
      {/* <About /> */}
      <Portfolio />
      {/* <Testimonials testimonials={testimonials} /> */}
      <Contact />
      <Footer />
      <ScrollToTopButton show={showScroll} />
    </>
  );
};

export default Home;
