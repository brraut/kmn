import React from "react";

function AboutUs({ context }) {
  return (
    <div className="container">
      <div className="about-us-wrapper">
        <div className="title text-align-center-res">
          <h6>Welcome to KNM</h6>
        </div>
        <div className="pt-1 pb-4 secondaryTitle text-align-center-res">
          <h2>Know more about us</h2>
        </div>
        <div className="d-flex about-us-container p-2">
          <div className="flex-width">
            <img src="/images/about.jpg" alt="" />
          </div>
          <div className="flex-width">
            <div className="mb-0">
              <p
                className="line-height fw-normal text-dark "
                dangerouslySetInnerHTML={{
                  __html: context?.about_section?.description,
                }}
              ></p>
            </div>
            {/* <button className="my-btn mt-5">
            See More <i className="bi bi-arrow-right"></i>
          </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
