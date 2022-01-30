import React, { useState, useEffect } from "react";
import { getBlogsApi } from "../../api/blog/blogApi";

/* component */
import Header from "./Header";
import Body from "./Body";

function index() {
  const [blogContext, setBlogContext] = useState();
  useEffect(() => {
    getBlogsApi().then((res) => setBlogContext(res.data.data));
  }, []);
  return (
    <>
      <Header context={blogContext} />
      <Body context={blogContext} type="bg-white" />
    </>
  );
}

export default index;
