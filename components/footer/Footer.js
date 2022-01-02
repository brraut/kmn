import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="d-flex first-row">
        <div className="social-media-container">
          <div>
            <img src="/images/kmnlogo.png" alt="logo kmn" />
          </div>
          <div className="pt-4 d-flex justify-content-between">
            <i className="bi bi-facebook bg-warning px-1"></i>
            <i className="bi bi-youtube bg-warning px-1"></i>
            <i className="bi bi-instagram bg-warning px-1"></i>
            <i className="bi bi-twitter bg-warning px-1"></i>
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
            <i className="bi bi-geo-alt-fill text-warning me-2"></i> 2972
            Westheimer Rd. Santa Ana, Illinois 85486
          </h6>
        </div>
        <div className="pt-3">
          <h6 className="text-light">
            <i className="bi bi-telephone-fill text-warning me-2"></i> (406)
            555789
          </h6>
        </div>
        <div className="pt-3">
          <h6 className="text-light">
            <i className="bi bi-envelope text-warning me-2"></i> kmn@gmail.com
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
            placeholder="Username"
            name="usrnm"
          />
          <i className="bi bi-envelope bg-warning fs-5 input-icon"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
