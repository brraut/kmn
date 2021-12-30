import React from "react";
import Service from "../home/Service";

/* components */
import Header from "./Header";
import Process from "./Process";

function index() {
  return (
    <>
      <Header />
      <div className="pt-5">
        <Service type="bg-white" />
      </div>
      <Process />
    </>
  );
}

export default index;
