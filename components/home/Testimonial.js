import React from "react";
import Slider from "react-slick";

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="testimonial-wrapper">
      <div className="title pb-3">
        <h6 className="text-center">Testimonials</h6>
      </div>
      <div className="secondaryTitle pb-5">
        <h2 className="text-center">What people say about us</h2>
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          <div className="slider-item">
            <div className="text-center pt-4">
              <img src="/images/quotes.png" className="m-auto" />
            </div>
            <div className="content">
              <p className="text-center line-clamp-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum neque ac pulvinar sed fermentum. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Vestibulum neque ac
                pulvinar sed fermentum.
              </p>
            </div>
            <div>
              <div className="pt-2">
                <h5 className="text-center">Bimala Khulal</h5>
              </div>
              <div className="pb-4">
                <h6 className="text-center details">
                  Share Holder, Kylie Cosmetics
                </h6>
              </div>
            </div>
          </div>

          <div className="slider-item">
            <div className="text-center pt-4">
              <img src="/images/quotes.png" className="m-auto" />
            </div>
            <div className="content">
              <p className="text-center line-clamp-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum neque ac pulvinar sed fermentum. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Vestibulum neque ac
                pulvinar sed fermentum.
              </p>
            </div>
            <div>
              <div className="pt-2">
                <h5 className="text-center">Bimala Khulal</h5>
              </div>
              <div className="pb-4">
                <h6 className="text-center details">
                  Share Holder, Kylie Cosmetics
                </h6>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
