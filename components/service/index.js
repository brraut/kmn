import React from "react";

/* components */
import Header from "./Header";
import Service from "../home/Service";
import Process from "./Process";
import Testimonial from "../home/Testimonial";

function index() {
  return (
    <>
      <Header />
      <div className="pt-5">
        <Service type="bg-white" />
      </div>
      <Process />
      <Testimonial />
    </>
  );
}

export default index;
