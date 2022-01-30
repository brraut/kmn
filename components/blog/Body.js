import Link from "next/link";
import React from "react";

/* component */
import NewsFeedCard from "../home/common/NewsFeedCard";

function Body({ type = "", context }) {
  return (
    <div
      className={
        type === "bg-white"
          ? "blog-wrapper bg-white"
          : "blog-wrapper background-pink"
      }
    >
      <div className="row">
        {context?.blogs?.map((blog) => (
          <div className="col-lg-4 col-md-6 col-12">
            <NewsFeedCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
