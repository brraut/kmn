import Link from "next/link";
import React from "react";

function Body() {
  return (
    <div className="container portfolio-container">
      <div className="row">
        <div className="col-12	col-sm-6	col-md-12	col-lg-6	col-xl-6	col-xxl-6 g-0">
          <PortfolioList src="/images/card1.png" title="Door Installation" />
        </div>
        <div className="col-12	col-sm-6	col-md-12	col-lg-6	col-xl-6	col-xxl-6 g-0">
          <PortfolioList src="/images/card2.png" title="Window Installation" />
        </div>
        <div className="col-12	col-sm-6	col-md-12	col-lg-6	col-xl-6	col-xxl-6 g-0">
          <PortfolioList src="/images/card3.png" title="Glass Installation" />
        </div>
        <div className="col-12	col-sm-6	col-md-12	col-lg-6	col-xl-6	col-xxl-6 g-0">
          <PortfolioList src="/images/card1.png" title="Automatic Gates" />
        </div>
        <div className="col-12	col-sm-6	col-md-12	col-lg-6	col-xl-6	col-xxl-6 g-0">
          <PortfolioList src="/images/card2.png" title="Door Repair" />
        </div>
        <div className="col-12	col-sm-6	col-md-12	col-lg-6	col-xl-6	col-xxl-6 g-0">
          <PortfolioList src="/images/card3.png" title="Door Installation" />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="my-btn mt-5">
          View More <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

const PortfolioList = ({ src, title }) => {
  return (
    <>
      {/* <div className="card mb-3 border-none">
        <div className="row g-0">
          <div className="col-md-3 detail-align-center">
            <img src={src} className="img-fluid card-image" alt="..." />
          </div>
          <div className="col-md-8 detail-align-center">
            <div className="card-body">
              <h6 className="card-title fs-15">
                {" "}
                7 Mind Numbing Facts About Windows You must Know
              </h6>

              <p className="card-text">
                <small className="fs-12 newsfeed-card-date">December 31,2021</small>
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="card m-3">
        <div className="row g-0 position-relative">
          <div className="position-absolute "></div>
          <div className="col-md-4 detail-align-center">
            <img src={src} className="img-fluid portfolio-img" alt="..." />
          </div>
          <div className="col-md-8 detail-align-center">
            <div className="card-body ">
              <h5 className="card-title fw-bold line-clamp-1">{title}</h5>
              <p className="card-text">
                <small className="fs-12 newsfeed-card-date">
                  December 31,2021
                </small>
              </p>
              <p className="card-text line-clamp-4">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <Link href="/portfolio/detail/1">
                <a>
                  <div className="d-flex justify-content-start align-items-center">
                    <div className="">
                      <h6 className="mb-0 font-color-orange">Read More</h6>
                    </div>
                    <div>
                      <i className="bi bi-arrow-right-short icon-color-orange"></i>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
