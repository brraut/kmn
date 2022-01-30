import React, { useEffect, useState } from "react";

/* component */
import Header from "./Header";
import Body from "./Body";
import { getPortfolioApi } from "../../api/portfolio/portfolioApi";

function index() {
  const [portfolioContext, setPortfolioContext] = useState();
  useEffect(() => {
    getPortfolioApi().then((res) => setPortfolioContext(res.data.data));
  }, []);
  return (
    <div>
      <Header context={portfolioContext} />
      <Body context={portfolioContext} />
    </div>
  );
}

export default index;
