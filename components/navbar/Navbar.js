import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="my-navbar">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="logo-container">
            <img src="/images/kmnlogo.png" alt="" />
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
  );
}

export default Navbar;
