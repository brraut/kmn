import React from "react";

function AboutUs() {
  return (
    <div className="about-us-wrapper">
      <div className="d-flex about-us-container">
        <div className="flex-width">
          <img src="/images/about.jpg" alt="" />
        </div>
        <div className="flex-width">
          <div className="title">
            <h6>About us</h6>
          </div>
          <div className="pt-1 pb-4 secondaryTitle">
            <h2>Know more about us</h2>
          </div>
          <div className="mb-0">
            <p className="line-height">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum neque ac pulvinar sed fermentum. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Vestibulum neque ac pulvinar
              sed fermentum.or sit amet, consectetur adipiscing elit. Vestibulum
              neque ac pulvinar sed fermentum...
            </p>
          </div>
          <button className="my-btn mt-5">
            See More <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
