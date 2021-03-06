import Link from "next/link";
import React from "react";

function ServiceCard({
  src = "",
  title = "",
  content = "",
  slug = "",
  backgroundColor = "#fff",
}) {
  const fontColor =
    backgroundColor === "#fff" ? "light-background" : "dark-background";
  const contentColor =
    backgroundColor === "#fff" ? "light-background" : "dark-color";

  return (
    <>
      <div
        className="card px-24 py-5 service-card-container"
        style={{ backgroundColor: backgroundColor }}
      >
        <img src={src} className="" alt="..." />
        <div className="card-body px-3 pt-3 pb-0">
          <h6 className={`card-title text-center ${fontColor}`}>{title}</h6>
          <div className="mx-3">
            <p
              className={`card-text text-center service-card-content ${contentColor}`}
            >
              {content}
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="title">
              <Link href={`/services/detail/${slug}`}>
                <a>
                  <h6 className="mb-0">Read More</h6>
                </a>
              </Link>
            </div>
            <div>
              <i className="bi bi-arrow-right-short icon-color-orange"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
