import React from "react";

/* component */
import AboutUs from "./AboutUs";
import Footer from "../footer/Footer";
import Blog from "../home/Blog";
import Header from "./Header";
import TeamMember from "./TeamMember";

function index() {
  return (
    <div>
      <Header />
      <AboutUs />
      <TeamMember />
      <Blog />
      <Footer />
    </div>
  );
}

export default index;
