import React, { useState, useEffect } from "react";

/* component */
import AboutUs from "./AboutUs";
import Blog from "../home/Blog";
import Header from "./Header";
import TeamMember from "./TeamMember";
import { getAboutApi } from "../../api/about/aboutApi";

function index() {
  const [aboutContext, setAboutContext] = useState();
  useEffect(() => {
    getAboutApi().then((res) => setAboutContext(res.data.data));
  }, []);
  return (
    <div>
      <Header context={aboutContext} />
      <AboutUs context={aboutContext} />
      <TeamMember context={aboutContext} />
      <Blog context={aboutContext} />
    </div>
  );
}

export default index;
