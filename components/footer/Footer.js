import React, { useState } from "react";
import { useAppContext } from "../../api/AppContext";
import { postNewsletterApi } from "../../api/contact/contactApi";

function Footer() {
  const value = useAppContext();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    if (email && !loading) {
      setLoading(true);
      postNewsletterApi({ email: email })
        .then((res) => {
          setLoading(false);
          setEmail("");
          alert(res?.data?.message);
        })
        .catch((err) => {
          setLoading(false);
          alert(err?.response?.data?.message);
        });
    }
  };
  console.log(email);
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="footer">
      <div className="d-flex first-row">
        <div className="social-media-container">
          <div>
            <img src={value?.logo} alt="logo kmn" />
          </div>
          <div className="pt-4 d-flex justify-content-between">
            <a
              href={value?.facebook_link || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook bg-warning px-1"></i>
            </a>
            <a
              href={value?.youtube_link || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-youtube bg-warning px-1"></i>
            </a>
            <a
              href={value?.instagram_link || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram bg-warning px-1"></i>
            </a>
          </div>
        </div>
        <div>
          <div>
            <h5 className="text-light pl-3">Quick Link</h5>
          </div>
          <div className="pt-3">
            <h6 className="text-light">
              <i className="bi bi-caret-right-fill text-warning me-2"></i> About
            </h6>
          </div>
          <div className="pt-3">
            <h6 className="text-light">
              <i className="bi bi-caret-right-fill text-warning me-2"></i>{" "}
              Services
            </h6>
          </div>
          <div className="pt-3">
            <h6 className="text-light">
              <i className="bi bi-caret-right-fill text-warning me-2"></i>{" "}
              Pricing
            </h6>
          </div>
          <div className="pt-3">
            <h6 className="text-light">
              <i className="bi bi-caret-right-fill text-warning me-2"></i>{" "}
              Projects
            </h6>
          </div>
          <div className="pt-3">
            <h6 className="text-light">
              <i className="bi bi-caret-right-fill text-warning me-2"></i>{" "}
              Contact US
            </h6>
          </div>
        </div>
      </div>
      <div className="flex-5">
        <div>
          <h5 className="text-light text-align-center-footer">Contact us</h5>
        </div>
        <div className="pt-3">
          <h6 className="text-light">
            <i className="bi bi-geo-alt-fill text-warning me-2"></i>
            {value?.address}
          </h6>
        </div>
        <div className="pt-3">
          <h6 className="text-light">
            <i className="bi bi-telephone-fill text-warning me-2"></i>
            <a href={`tel:${value?.primary_phone}`}>{value?.primary_phone}</a>
          </h6>
        </div>
        <div className="pt-3">
          <h6 className="text-light">
            <i className="bi bi-envelope text-warning me-2"></i>
            {value?.primary_email}
          </h6>
        </div>
      </div>
      <div>
        <div>
          <h5 className="text-light text-align-center-footer">News Letter</h5>
        </div>
        <div className="pt-3">
          <h6 className="text-light fw-light">Your Email</h6>
        </div>
        <div className="input-container">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Email"
            name="newsletter_email"
            onChange={handleChange}
            value={email}
          />
          <i
            className={
              (loading ? "bi bi-arrow-counterclockwise" : "bi bi-envelope") +
              " bg-warning fs-5 input-icon newsletter-icon"
            }
            onClick={handleSubmit}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
