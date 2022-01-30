import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getSingleServcieApi } from "../../../api/service/serviceApi";

/* component */
import Body from "./Body";

function index() {
  const [singleServiceContext, setSingleService] = useState();
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  useEffect(() => {
    slug &&
      getSingleServcieApi(slug).then((res) => setSingleService(res.data.data));
  }, [slug]);
  return (
    <>
      <Body
        service={singleServiceContext?.service}
        otherServices={singleServiceContext?.other_services}
      />
    </>
  );
}

export default index;
