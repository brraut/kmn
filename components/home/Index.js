import React from "react";
import Footer from "../footer/Footer";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Blog from "./Blog";
import Project from "./Project";
import Service from "./Service";
import Testimonial from "./Testimonial";

function HomeIndex() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Service />
      <Project />
      <Blog />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default HomeIndex;
