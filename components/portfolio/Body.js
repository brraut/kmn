import Link from "next/link";
import React from "react";

function Body({ context }) {
  return (
    <div className="container portfolio-container">
      <div className="row">
        {context?.works?.map((work, index) => (
          <div
            className="col-12	col-sm-6	col-md-12	col-lg-6	col-xl-6	col-xxl-6 g-0"
            key={index}
          >
            <PortfolioList work={work} />
          </div>
        ))}
      </div>
      {/* <div className="d-flex justify-content-center">
        <button className="my-btn mt-5">
          View More <i className="bi bi-arrow-right"></i>
        </button>
      </div> */}
    </div>
  );
}

const PortfolioList = ({ work }) => {
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
            <img
              src={work?.image}
              className="img-fluid portfolio-img"
              alt="..."
            />
          </div>
          <div className="col-md-8 detail-align-center">
            <div className="card-body ">
              <h5 className="card-title fw-bold line-clamp-1">{work?.title}</h5>
              <p className="card-text">
                <small className="fs-12 newsfeed-card-date">{work?.date}</small>
              </p>
              <p className="card-text line-clamp-4">{work?.excerpt}</p>
              <Link href={`/portfolio/detail/${work?.slug}`}>
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
