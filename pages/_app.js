import Navbar from "../components/navbar/Navbar";
import "../styles/globals.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
