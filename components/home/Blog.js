import Link from "next/link";
import React from "react";
import Slider from "react-slick";

/* components */
import NewsFeedCard from "./common/NewsFeedCard";

function Blog({ type = "", context }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow:
            context?.recent_blogs?.length < 3
              ? context?.recent_blogs?.length
              : 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div
      className={
        type === "bg-white" ? "blog-wrapper" : "blog-wrapper background-pink"
      }
    >
      <div className="title">
        <h6 className="text-center">Our Blog</h6>
      </div>
      <div className="secondaryTitle pb-5">
        <h2 className="text-center">Our Latest Newsfeed</h2>
      </div>
      <div>
        <Slider {...settings}>
          {context?.recent_blogs?.map((blog) => (
            <div className="slider-card">
              <NewsFeedCard blog={blog} />
            </div>
          ))}
        </Slider>
        <div className="d-flex justify-content-center">
          <Link href="/blog">
            <a>
              <button className="my-btn mt-5">
                See More <i className="bi bi-arrow-right"></i>
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blog;
