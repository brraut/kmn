import Link from "next/link";
import React from "react";

function Body({ context }) {
  return (
    <div className="container service-container">
      <div className="row">
        {context?.services?.map((service) => (
          <div className="col-12	col-sm-6	col-md-12	col-lg-6	col-xl-6	col-xxl-6 g-0">
            <PortfolioList service={service} />
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

const PortfolioList = ({ service }) => {
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
        <div className="row g-0">
          <div className="col-md-8 detail-align-center">
            <div className="card-body ">
              <h6 className="card-title line-clamp-1">{service?.title}</h6>

              <small className="card-text line-clamp-4">
                {service?.excerpt}
              </small>
              <Link href={`/services/detail/${service?.slug}`}>
                <a>
                  <div className="d-flex justify-content-start align-items-center mt-4">
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
          <div className="col-md-4 detail-align-center">
            <img
              src={service?.image}
              className="img-fluid service-img"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
