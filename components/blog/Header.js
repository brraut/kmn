import React from "react";

function header() {
  return (
    <div className="banner">
      <div className="service-background-left"></div>
      <div className="container">
        <div className="banner-content">
          <div className="banner-wrapper">
            <div className="title">Blog</div>
            <div className="service-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              temporibus laboriosam blanditiis laudantium cupiditate atque iste
            </div>
          </div>
          <div className="service-banner-image">
            <img src="/images/banner1.png" className="h-60" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
