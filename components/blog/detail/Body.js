import React from "react";

function Body() {
  return (
    <div className="banner">
      <div className="about-background-left"></div>
      <div className="container">
        <div className="row blog-detail px-5">
          <div class="col-md-7	col-lg-7	col-xl-7	col-xxl-7">
            <div>
              <h4 className="fw-bolder text-center">
                7 Mind Numbing Facts About Windows You must Know
              </h4>
            </div>

            <div className="blog-image">
              <img src="/images/aboutUs.jpg" className="blog-img" />
            </div>
            <div className="py-3">
              <h6 className={`card-text newsfeed-card-date fs-6`}>
                {`November 25,2020`}
              </h6>
            </div>
            <div className="pt-4">
              <p className="color-dark lh-2 fst-italic fw-normal fs-18">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis
              </p>
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
            <div className="pt-4 d-flex justify-content-start">
              <i class="bi bi-facebook bg-warning me-3 px-1"></i>
              <i class="bi bi-youtube bg-warning me-3 px-1"></i>
              <i class="bi bi-instagram bg-warning me-3 px-1"></i>
              <i class="bi bi-twitter bg-warning me-3 px-1"></i>
            </div>
          </div>

          <div class="pl-100 col-md-5	col-lg-5	col-xl-5	col-xxl-5">
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
      <div class="card mb-3 border-none">
        <div class="row g-0">
          <div class="col-md-3">
            <img src={src} class="img-fluid card-image" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h6 class="card-title fs-15">
                {" "}
                7 Mind Numbing Facts About Windows You must Know
              </h6>

              <p class="card-text">
                <small class="fs-12 newsfeed-card-date">December 31,2021</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
