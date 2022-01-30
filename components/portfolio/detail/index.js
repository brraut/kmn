import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getSinglePortfolioApi } from "../../../api/portfolio/portfolioApi";

/* component */
import Body from "./Body";

function index() {
  const [singlePortfolioContext, setSinglePortfolio] = useState();
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    slug &&
      getSinglePortfolioApi(slug).then((res) =>
        setSinglePortfolio(res.data.data)
      );
  }, [slug]);
  return (
    <>
      <Body
        work={singlePortfolioContext?.work}
        recentWorks={singlePortfolioContext?.recent_works}
      />
    </>
  );
}

export default index;
