import React from "react";

function header({ context }) {
  return (
    <div className="banner">
      <div className="about-background-left"></div>
      <div className="container">
        <div className="banner-content">
          <div className="banner-wrapper">
            <div className="title">Contact US</div>
            <div
              className="service-description line-clamp-4 "
              dangerouslySetInnerHTML={{
                __html: context?.contact_section?.description,
              }}
            ></div>
          </div>
          <div className="service-banner-image">
            <img src={context?.contact_section?.banner} className="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
