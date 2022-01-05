import { useRouter } from "next/router";
import React from "react";

/* component */
import Body from "../../../components/service/detail/index";

function blogSingle() {
  const router = useRouter();
  const { slug } = router.query;
  return <Body />;
}

export default blogSingle;
