import Head from "next/head";
import Link from "next/link";
import React from "react";
import { formatDate } from "../../../utils/moment";

function Body({ blog, recentBlogs }) {
  return (
    <div className="banner">
      <Head>
        <title>KMN Blogs | {blog?.title}</title>
      </Head>
      ;<div className="detail-page-background"></div>
      <div className="container single-blog">
        <div className="row blog-detail px-4">
          <div className="col-md-7	col-lg-7	col-xl-7	col-xxl-7 mb-5">
            <div>
              <h4 className="fw-bolder text-center">{blog?.title}</h4>
            </div>

            <div className="blog-image">
              <img src={blog?.image} className="blog-img" />
            </div>
            <div className="py-3">
              <h6 className={`card-text newsfeed-card-date fs-6`}>
                {blog?.created_at}
              </h6>
            </div>

            <div className="pt-4 d-flex justify-content-start justify-content-res">
              <i className="bi bi-facebook bg-warning me-3 px-1"></i>
              <i className="bi bi-youtube bg-warning me-3 px-1"></i>
              <i className="bi bi-instagram bg-warning me-3 px-1"></i>
              <i className="bi bi-twitter bg-warning me-3 px-1"></i>
            </div>
            <div className="pt-4">
              <div
                className="color-dark lh-2 fst-italic fw-normal fs-18"
                dangerouslySetInnerHTML={{ __html: blog?.description }}
              ></div>
            </div>
          </div>

          <div className="pl-100 col-md-5	col-lg-5	col-xl-5	col-xxl-5">
            <h6 className="text-align-center-res mb-1-res">Recent Blogs</h6>
            {recentBlogs?.map((recentBlog, index) => (
              <BlogList blog={recentBlog} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const BlogList = ({ blog }) => {
  return (
    <>
      <div className="card mb-3 border-none">
        <Link href={`/blog/detail/${blog?.slug}`}>
          <a>
            <div className="row g-0">
              <div className="col-md-3 detail-align-center">
                <img
                  src={blog?.image}
                  className="img-fluid card-image"
                  alt={blog?.title}
                />
              </div>
              <div className="col-md-8 detail-align-center">
                <div className="card-body">
                  <h6 className="card-title fs-15">{blog?.title}</h6>

                  <p className="card-text">
                    <small className="fs-12 newsfeed-card-date">
                      {formatDate(blog?.created_at)}
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
