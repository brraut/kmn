import React, { useState } from "react";
import Slider from "react-slick";

function Banner({ context }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleProjectDetail = (title) => {
    console.log("title", title);
    return <div className="on-hover-project"></div>;
  };

  return (
    <>
      <div>
        <div className="banner-carousel">
          <Slider {...settings}>
            {context?.banners &&
              context?.banners?.map((banner) => {
                return (
                  <div className="banner">
                    <div className="background-left"></div>
                    <div className="container">
                      <div className="banner-content">
                        <div className="banner-wrapper">
                          <div
                            className="title"
                            dangerouslySetInnerHTML={{ __html: banner?.title }}
                          ></div>
                          <div className="description line-clamp-4">
                            {banner?.subtitle}
                          </div>

                          <a
                            href={banner?.link || "#"}
                            className="my-btn mt-5 btn-width"
                          >
                            See More <i className="bi bi-arrow-right"></i>
                          </a>
                        </div>
                        <div className="banner-image">
                          <img
                            src={banner?.image || "/images/banner.jpg"}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Banner;
