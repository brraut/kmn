import React from "react";

function header({ context }) {
  return (
    <div className="banner">
      <div className="service-background-left"></div>
      <div className="container">
        <div className="banner-content">
          <div className="banner-wrapper">
            <div className="title">Blog</div>
            <div
              className="service-description line-clamp-4 "
              dangerouslySetInnerHTML={{
                __html: context?.blog_section?.description,
              }}
            ></div>
          </div>
          <div className="service-banner-image">
            <img src={context?.blog_section?.banner} className="h-60" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
