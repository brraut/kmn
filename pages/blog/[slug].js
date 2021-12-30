import { useRouter } from "next/router";
import React from "react";

function blogSingle() {
  const router = useRouter();
  const { slug } = router.query;
  return <div>single {slug}</div>;
}

export default blogSingle;
