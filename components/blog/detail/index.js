import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getSingleBlogApi } from "../../../api/blog/blogApi";
import Comment from "../../../services/facebook/Comment";

/* component */
import Body from "./Body";

function Index() {
  const [singleBlogContext, setSingleBlog] = useState();
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    slug && getSingleBlogApi(slug).then((res) => setSingleBlog(res.data.data));
  }, [slug]);
  return (
    <>
      <Body
        blog={singleBlogContext?.blog}
        recentBlogs={singleBlogContext?.recent_blogs}
      />
      <Comment />
    </>
  );
}

export default Index;
