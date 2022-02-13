import Link from "next/link";
import React, { useContext } from "react";
import { useAppContext } from "../../api/AppContext";

function Navbar() {
  const value = useAppContext();
  return (
    <>
      <div className="my-navbar">
        <div className="container">
          <div className="navbar-wrapper align-items-center">
            <Link href="/">
              <a>
                <div className="logo-container">
                  <img src={value?.logo} alt="" />
                </div>
              </a>
            </Link>
            <button
              className="btn btn-primary h-50 mt-2 ham-menu-display"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
            >
              <i className="bi bi-list"></i>
            </button>

            <div
              className="offcanvas offcanvas-start  background-dark"
              data-bs-scroll="true"
              data-bs-backdrop="false"
              tabIndex="-1"
              id="offcanvasScrolling"
              aria-labelledby="offcanvasScrollingLabel"
            >
              <div className="offcanvas-header d-flex flex-row-reverse">
                {/* <button
                  type="button"
                  className="text-reset icon-color-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <i className="bi bi-x-circle"></i>
                </button> */}
                <button
                  data-bs-dismiss="offcanvas"
                  className="background-dark border-none icon-color-white"
                >
                  <i className="bi bi-x"></i>
                </button>
              </div>
              <div className="offcanvas-body">
                <ul className="flex-direction-column ">
                  <li
                    className="line-height-2 text-white"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link href="/">
                      <a className="items-hover"> Home</a>
                    </Link>
                  </li>
                  <li
                    className="line-height-2 text-white"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link href="/services">
                      <a className="items-hover">Services</a>
                    </Link>
                  </li>
                  <li
                    className="line-height-2 text-white"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link href="/blog">
                      <a className="items-hover"> Blog</a>
                    </Link>
                  </li>
                  <li
                    className="line-height-2 text-white"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link href="/portfolio">
                      <a className="items-hover"> Portfolio</a>
                    </Link>
                  </li>
                  <li
                    className="line-height-2 text-white"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link href="/about">
                      <a className="items-hover"> About us</a>
                    </Link>
                  </li>
                  <li
                    className="line-height-2 text-white"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link href="/contact">
                      <a className="items-hover"> Contact us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <ul className="navbar-items">
              <li>
                <Link href="/">
                  <a> Home</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a> Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <a> Portfolio</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a> About us</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a> Contact us</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
