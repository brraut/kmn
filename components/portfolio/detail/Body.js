import React from "react";

function Body() {
  return (
    <div className="banner">
      <div className="detail-page-background"></div>
      <div className="container py-5">
        <div className="row blog-detail px-4">
          <div className="col-md-12	col-lg-7	col-xl-7	col-xxl-7 mb-5 p-48">
            <div className="row mb-4">
              <div className="col-12	col-sm-12	col-md-12	col-lg-12	col-xl-12	col-xxl-12">
                <div className="portfolio-image">
                  <img src="/images/aboutUs.jpg" className="blog-img" />
                </div>
              </div>
              <div className="col-6	col-sm-6	col-md-3	col-lg-3	col-xl-3	col-xxl-3">
                <div className="portfolio-image">
                  <img src="/images/aboutUs.jpg" className="blog-img" />
                </div>
              </div>
              <div className="col-6	col-sm-6	col-md-3	col-lg-3	col-xl-3	col-xxl-3">
                <div className="portfolio-image">
                  <img src="/images/aboutUs.jpg" className="blog-img" />
                </div>
              </div>
              <div className="col-6	col-sm-6	col-md-3	col-lg-3	col-xl-3	col-xxl-3">
                <div className="portfolio-image">
                  <img src="/images/aboutUs.jpg" className="blog-img" />
                </div>
              </div>
              <div className="col-6	col-sm-6	col-md-3	col-lg-3	col-xl-3	col-xxl-3">
                <div className="portfolio-image">
                  <img src="/images/aboutUs.jpg" className="blog-img" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="fw-bolder ">
                7 Mind Numbing Facts About Windows You must Know
              </h4>
            </div>
            <div className="py-3">
              <h6 className={`card-text newsfeed-card-date fs-6`}>
                {`November 25,2020`}
              </h6>
            </div>

            <div className="pt-3">
              <p className="lh-2 fw-normal fs-18">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis
              </p>
            </div>
            <div className="pt-4 d-flex justify-content-start justify-content-res">
              <i className="bi bi-facebook bg-warning me-3 px-1"></i>
              <i className="bi bi-youtube bg-warning me-3 px-1"></i>
              <i className="bi bi-instagram bg-warning me-3 px-1"></i>
              <i className="bi bi-twitter bg-warning me-3 px-1"></i>
            </div>
          </div>

          <div className="pl-100 col-md-12	col-lg-5	col-xl-5	col-xxl-5 p-48">
            <h6 className="text-align-center-res mb-1-res">Similar Post</h6>

            <BlogList src="/images/card1.png" />
            <BlogList src="/images/card3.png" />
            <BlogList src="/images/card2.png" />
            <BlogList src="/images/card1.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

const BlogList = ({ src }) => {
  return (
    <>
      <div className="card mb-3 border-none">
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
                <small className="fs-12 newsfeed-card-date">
                  December 31,2021
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
