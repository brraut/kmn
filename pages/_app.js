import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "../styles/globals.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from "next/script";
import { AppWrapper } from "../api/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppWrapper>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </AppWrapper>
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossorigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossorigin="anonymous"
      />
    </>
  );
}

export default MyApp;
