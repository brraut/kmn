import Link from "next/link";
import React from "react";

/* component */
import NewsFeedCard from "../home/common/NewsFeedCard";

function Body({ type = "" }) {
  return (
    <div
      className={
        type === "bg-white"
          ? "blog-wrapper bg-white"
          : "blog-wrapper background-pink"
      }
    >
      <div className="d-flex justify-content-between pt-5 flex-direction-res">
        <NewsFeedCard
          src="/images/card1.png"
          content="Lorem ipsum dolor sit amet, consectetur scing elit. Dui luctus nisi, sapien in amet.Lorem ipsum dolor sit amet, conser adipiscing elit. Dui luctus nisi, sapien in amet...."
          title="7 Mind Numbing Facts About Windows You must Know"
        />

        {/* <Link href="/blog/detail/1">
          <a> */}
        <NewsFeedCard
          src="/images/card1.png"
          content="Lorem ipsum dolor sit amet, consectetur scing elit. Dui luctus nisi, sapien in amet.Lorem ipsum dolor sit amet, conser adipiscing elit. Dui luctus nisi, sapien in amet...."
          title="7 Mind Numbing Facts About Windows You must Know"
        />
        {/* </a>
        </Link>
        <Link href="/blog/detail/1">
          <a> */}
        <NewsFeedCard
          src="/images/card1.png"
          content="Lorem ipsum dolor sit amet, consectetur scing elit. Dui luctus nisi, sapien in amet.Lorem ipsum dolor sit amet, conser adipiscing elit. Dui luctus nisi, sapien in amet...."
          title="7 Mind Numbing Facts About Windows You must Know"
        />
        {/* </a>
        </Link> */}
      </div>
      <div className="d-flex justify-content-between pt-5 flex-direction-res">
        <NewsFeedCard
          src="/images/card1.png"
          content="Lorem ipsum dolor sit amet, consectetur scing elit. Dui luctus nisi, sapien in amet.Lorem ipsum dolor sit amet, conser adipiscing elit. Dui luctus nisi, sapien in amet...."
          title="7 Mind Numbing Facts About Windows You must Know"
        />
        <NewsFeedCard
          src="/images/card1.png"
          content="Lorem ipsum dolor sit amet, consectetur scing elit. Dui luctus nisi, sapien in amet.Lorem ipsum dolor sit amet, conser adipiscing elit. Dui luctus nisi, sapien in amet...."
          title="7 Mind Numbing Facts About Windows You must Know"
        />
        <NewsFeedCard
          src="/images/card1.png"
          content="Lorem ipsum dolor sit amet, consectetur scing elit. Dui luctus nisi, sapien in amet.Lorem ipsum dolor sit amet, conser adipiscing elit. Dui luctus nisi, sapien in amet...."
          title="7 Mind Numbing Facts About Windows You must Know"
        />
      </div>
    </div>
  );
}

export default Body;
