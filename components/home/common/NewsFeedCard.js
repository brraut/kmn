import Link from "next/link";
import React from "react";

function NewsFeedCard({ src = "", title = "", content = "" }) {
  return (
    <>
      <div className="card px-3 pt-3 pb-4 newsfeed-card-container">
        <img src={src} className="" alt="..." />
        <div className="card-body px-0 pt-4 pb-0">
          <h6 className={`card-title fw-bold`}>{title}</h6>

          <div className="">
            <h6 className={`card-text newsfeed-card-date`}>
              {`November 25,2020`}
            </h6>
          </div>

          <div className="pt-3 pb-3">
            <p className={`card-text newsfeed-card-content text-left`}>
              {content}
            </p>
          </div>
          <Link href="/blog/detail/1">
            <a>
              <div className="d-flex justify-content-start align-items-center mb-2">
                <div className="title">
                  <h6 className="mb-0">Read More</h6>
                </div>
                <div>
                  <i class="bi bi-arrow-right-short icon-color-orange"></i>
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
