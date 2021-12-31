import Link from "next/link";
import React from "react";
import Slider from "react-slick";

/* components */
import NewsFeedCard from "./common/NewsFeedCard";

function Blog({ type = "" }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
          <div className="slider-card">
            <NewsFeedCard
              src="/images/card1.png"
              content="Lorem ipsum dolor sit amet, consectetur scing elit. Dui luctus nisi, sapien in amet.Lorem ipsum dolor sit amet, conser adipiscing elit. Dui luctus nisi, sapien in amet...."
              title="7 Mind Numbing Facts About Windows You must Know"
            />
            <NewsFeedCard
              src="/images/card2.png"
              content="Lorem ipsum dolor sit amet, consectetur scing elit. Dui luctus nisi, sapien in amet.Lorem ipsum dolor sit amet, conser adipiscing elit. Dui luctus nisi, sapien in amet...."
              title="7 Mind Numbing Facts About Windows You must Know"
            />
            <NewsFeedCard
              src="/images/card3.png"
              content="Lorem ipsum dolor sit amet, consectetur scing elit. Dui luctus nisi, sapien in amet.Lorem ipsum dolor sit amet, conser adipiscing elit. Dui luctus nisi, sapien in amet...."
              title="7 Mind Numbing Facts About Windows You must Know"
            />
          </div>
          <div className="slider-card">
            <NewsFeedCard
              src="/images/card1.png"
              content="Lorem ipsum dolor sit amet, consectetur scing elit. Dui luctus nisi, sapien in amet.Lorem ipsum dolor sit amet, conser adipiscing elit. Dui luctus nisi, sapien in amet...."
              title="7 Mind Numbing Facts About Windows You must Know"
            />
            <NewsFeedCard
              src="/images/card2.png"
              content="Lorem ipsum dolor sit amet, consectetur scing elit. Dui luctus nisi, sapien in amet.Lorem ipsum dolor sit amet, conser adipiscing elit. Dui luctus nisi, sapien in amet...."
              title="7 Mind Numbing Facts About Windows You must Know"
            />
            <NewsFeedCard
              src="/images/card3.png"
              content="Lorem ipsum dolor sit amet, consectetur scing elit. Dui luctus nisi, sapien in amet.Lorem ipsum dolor sit amet, conser adipiscing elit. Dui luctus nisi, sapien in amet...."
              title="7 Mind Numbing Facts About Windows You must Know"
            />
          </div>
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
