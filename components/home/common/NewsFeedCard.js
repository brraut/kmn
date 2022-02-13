import Link from "next/link";
import React from "react";
import { formatDate } from "../../../utils/moment";

function NewsFeedCard({ blog }) {
  return (
    <>
      <div className="card px-3 pt-3 pb-4 newsfeed-card-container">
        <img src={blog?.image} alt={blog?.title} />
        <div className="card-body px-0 pt-4 pb-0">
          <h6 className={`card-title fw-bold`}>{blog?.title}</h6>

          <div className="">
            <h6 className={`card-text newsfeed-card-date`}>
              {formatDate(blog?.created_at)}
            </h6>
          </div>

          <div className="pt-3 pb-3">
            <p className={`card-text newsfeed-card-content text-left`}>
              {blog?.excerpt}...
            </p>
          </div>
          <Link href={`/blog/detail/${blog?.slug}`}>
            <a>
              <div className="d-flex justify-content-start align-items-center mb-2">
                <div className="title">
                  <h6 className="mb-0">Read More</h6>
                </div>
                <div>
                  <i className="bi bi-arrow-right-short icon-color-orange"></i>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NewsFeedCard;
