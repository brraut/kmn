import React from "react";

function header() {
  return (
    <div className="banner">
      <div className="about-background-left"></div>
      <div className="container">
        <div className="banner-content">
          <div className="banner-wrapper">
            <div className="title">Portfolio</div>
            <div className="service-description line-clamp-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              temporibus laboriosam blanditiis laudantium cupiditate atque iste
            </div>
          </div>
          <div className="service-banner-image">
            <img src="/images/aboutUs.jpg" className="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;