import React, { useEffect, useState } from "react";
import { homePageApi } from "../../api/home/homeApi";
import Footer from "../footer/Footer";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Blog from "./Blog";
import Project from "./Project";
import Service from "./Service";
import Testimonial from "./Testimonial";

function HomeIndex() {
  const [homeContext, setHomeContext] = useState();
  useEffect(() => {
    homePageApi().then((res) => setHomeContext(res.data.data));
  }, []);
  return (
    <div>
      <Banner context={homeContext} />
      <AboutUs context={homeContext} />
      <Service context={homeContext} />
      <Project context={homeContext} />
      <Blog context={homeContext} />
      <Testimonial context={homeContext} />
      <Footer />
    </div>
  );
}

export default HomeIndex;
