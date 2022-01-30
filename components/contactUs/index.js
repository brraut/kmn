import React, { useState, useEffect } from "react";
import { getContactApi } from "../../api/contact/contactApi";

/* component */
import Body from "./Body";
import Header from "./Header";

function index() {
  const [contactContext, setContactContext] = useState();
  useEffect(() => {
    getContactApi().then((res) => setContactContext(res.data.data));
  }, []);
  return (
    <div>
      <Header context={contactContext} />
      <Body context={contactContext} />
    </div>
  );
}

export default index;
