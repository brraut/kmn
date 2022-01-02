import React, { useState } from "react";
import Slider from "react-slick";

function Banner() {
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
            <div className="banner">
              <div className="background-left"></div>
              <div className="container">
                <div className="banner-content">
                  <div className="banner-wrapper">
                    <div className="title">
                      Doors and window <span>Services</span>
                    </div>
                    <div className="description line-clamp-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Deleniti temporibus laboriosam blanditiis laudantium
                      cupiditate atque iste sint dolorum! Unde accusantium
                      tempora, suscipit porro praesentium amet perspiciatis!
                      Inventore facere voluptatem fugiat?
                    </div>

                    <button className="my-btn mt-5 btn-width">
                      See More <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                  <div className="banner-image">
                    <img src="/images/banner.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="banner">
              <div className="background-left"></div>
              <div className="container">
                <div className="banner-content">
                  <div className="banner-wrapper">
                    <div className="title">
                      Glasses and other <span>Services</span>
                    </div>
                    <div className="description line-clamp-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Deleniti temporibus laboriosam blanditiis laudantium
                      cupiditate atque iste sint dolorum! Unde accusantium
                      tempora, suscipit porro praesentium amet perspiciatis!
                      Inventore facere voluptatem fugiat?
                    </div>
                    <button className="my-btn mt-5">
                      Learn More <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                  <div className="banner-image">
                    <img src="/images/banner.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Banner;
