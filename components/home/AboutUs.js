import Link from "next/link";
import React from "react";

function AboutUs({ context }) {
  return (
    <div className="container">
      <div className="about-us-wrapper">
        <div className="d-flex about-us-container">
          <div className="flex-width">
            <img src={context?.about_section?.image} alt="" />
          </div>
          <div className="flex-width">
            <div className="title">
              <h6>About us</h6>
            </div>
            <div className="pt-1 pb-4 secondaryTitle">
              <h2>Know more about us</h2>
            </div>
            <div className="mb-0">
              <p className="line-height line-clamp-4 ">
                {context?.about_section?.excerpt}
              </p>
            </div>
            <div className="btn-margin w-100">
              <Link href="/about">
                <a>
                  <button className="my-btn  btn-absolute">
                    See More <i className="bi bi-arrow-right"></i>
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
