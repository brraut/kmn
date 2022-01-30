import React from "react";

function header({ context }) {
  return (
    <div className="banner">
      <div className="about-background-left"></div>
      <div className="container">
        <div className="banner-content">
          <div className="banner-wrapper">
            <div className="title">About US</div>
            <div className="service-description line-clamp-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              temporibus laboriosam blanditiis laudantium cupiditate atque iste
            </div>
          </div>
          <div className="service-banner-image">
            <img src={context?.about_section?.banner} className="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
