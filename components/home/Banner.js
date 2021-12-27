import React from "react";

function Banner() {
  return (
    <>
      <div className="banner">
        <div className="background-left"></div>
        <div className="container">
          <div className="banner-content">
            <div className="banner-wrapper">
              <div className="title">
                Doors and window <span>Services</span>
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti temporibus laboriosam blanditiis laudantium cupiditate
                atque iste sint dolorum! Unde accusantium tempora, suscipit
                porro praesentium amet perspiciatis! Inventore facere voluptatem
                fugiat?
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
    </>
  );
}

export default Banner;
