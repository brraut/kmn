import Head from "next/head";
import Link from "next/link";
import React from "react";

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function Body({ work, recentWorks }) {
  return (
    <div className="banner">
      <Head>
        <title>KMN Portfolio | {work?.title}</title>
      </Head>
      <div className="detail-page-background"></div>
      <div className="container py-5">
        <div className="row blog-detail px-4">
          <div className="col-md-12	col-lg-7	col-xl-7	col-xxl-7 mb-5 p-48">
            {work?.gallery?.length > 0 ? (
              <div className="row mb-4">
                {work?.gallery?.map((image, index) => (
                  <div key={index}>
                    <div className="portfolio-image">
                      <img
                        src={image?.src}
                        className="blog-img"
                        alt={work?.title}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="row mb-4">
                <div className="portfolio-image">
                  <img src={work?.image} className="blog-img" />
                </div>
              </div>
            )}
            <div>
              <h4 className="fw-bolder ">{work?.title}</h4>
            </div>
            {/* <div className="py-3">
              <h6 className={`card-text newsfeed-card-date fs-6`}>
                {`November 25,2020`}
              </h6>
            </div> */}

            <div className="pt-3">
              <p
                className="lh-2 fw-normal fs-18"
                dangerouslySetInnerHTML={{ __html: work?.description }}
              ></p>
            </div>
            <div className="pt-4 d-flex justify-content-start justify-content-res">
              <i className="bi bi-facebook bg-warning me-3 px-1"></i>
              <i className="bi bi-youtube bg-warning me-3 px-1"></i>
              <i className="bi bi-instagram bg-warning me-3 px-1"></i>
              <i className="bi bi-twitter bg-warning me-3 px-1"></i>
            </div>
          </div>

          <div className="pl-100 col-md-12	col-lg-5	col-xl-5	col-xxl-5 p-48">
            <h6 className="text-align-center-res mb-1-res">Similar Works</h6>
            {recentWorks?.map((recentWork, index) => (
              <BlogList work={recentWork} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const BlogList = ({ work }) => {
  return (
    <>
      <div className="card mb-3 border-none">
        <Link href={`/portfolio/detail/${work?.slug}`}>
          <a>
            <div className="row g-0">
              <div className="col-md-3 detail-align-center">
                <img
                  src={work?.image}
                  className="img-fluid card-image"
                  alt="..."
                />
              </div>
              <div className="col-md-8 detail-align-center">
                <div className="card-body">
                  <h6 className="card-title fs-15">{work?.title}</h6>

                  <p className="card-text">
                    <small className="fs-12 newsfeed-card-date">
                      {work?.created_at}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Body;
