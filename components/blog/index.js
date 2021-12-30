import React from "react";

/* component */
import Header from "./Header";
import Body from "./Body";
import Footer from "../footer/Footer";

function index() {
  return (
    <>
      <Header />
      <Body type="bg-white" />
      <Footer />
    </>
  );
}

export default index;
