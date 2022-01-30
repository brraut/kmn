import React from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function Body({ service, otherServices }) {
  return (
    <div className="banner">
      <div className="detail-page-background"></div>
      <div className="container py-5">
        <div className="row blog-detail px-4">
          <div className="col-md-12	col-lg-7	col-xl-7	col-xxl-7 mb-5 p-48">
            <div className="row mb-4">
              {service?.gallery?.length > 0 && (
                <div className="col-12">
                  <Slider {...settings}>
                    {service?.gallery?.map((image) => (
                      // <div className="col-12	col-sm-12	col-md-12	col-lg-12	col-xl-12	col-xxl-12">
                      <div>
                        <div className="portfolio-image">
                          <img src={image?.src} className="blog-img" />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              )}
              <div className="col-12 mt-5">
                <h4 className="fw-bolder ">{service?.title}</h4>
              </div>
              {/* <div className="py-3">
                <h6 className={`card-text newsfeed-card-date fs-6`}>
                {`November 25,2020`}
              </h6>
              </div> */}

              <div className="pt-3">
                <p
                  className="lh-2 fw-normal fs-18"
                  dangerouslySetInnerHTML={{ __html: service?.description }}
                ></p>
              </div>
              <div className="pt-4 d-flex justify-content-start justify-content-res">
                <i className="bi bi-facebook bg-warning me-3 px-1"></i>
                <i className="bi bi-youtube bg-warning me-3 px-1"></i>
                <i className="bi bi-instagram bg-warning me-3 px-1"></i>
                <i className="bi bi-twitter bg-warning me-3 px-1"></i>
              </div>
            </div>
          </div>

          <div className="pl-100 col-md-12	col-lg-5	col-xl-5	col-xxl-5 p-48">
            <h6 className="text-align-center-res mb-1-res">Other Services</h6>
            {otherServices?.map((otherService) => (
              <BlogList service={otherService} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const BlogList = ({ service }) => {
  return (
    <>
      <div className="card mb-3 border-none">
        <div className="row g-0">
          <div className="col-md-3 detail-align-center">
            <img
              src={service?.image}
              className="img-fluid card-image"
              alt="..."
            />
          </div>
          <div className="col-md-8 detail-align-center">
            <div className="card-body">
              <h6 className="card-title fs-15">{service?.title}</h6>

              <p className="card-text">
                <small className="fs-12 newsfeed-card-date">
                  {service?.excerpt}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
