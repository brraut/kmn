import React, { useEffect, useState } from "react";

/* components */
import Header from "./Header";
import Body from "./Body";
import { getServiceApi } from "../../api/service/serviceApi";

function index() {
  const [serviceContext, setServiceContext] = useState();
  useEffect(() => {
    getServiceApi().then((res) => setServiceContext(res.data.data));
  }, []);

  return (
    <>
      <Header context={serviceContext} />
      <Body context={serviceContext} />
    </>
  );
}

export default index;
