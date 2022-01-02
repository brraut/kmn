import Link from "next/link";
import React from "react";
import ServiceCard from "./common/ServiceCard";

function Service({ type = "" }) {
  return (
    <div
      className={
        type === "bg-white"
          ? "our-service-wrapper bg-white"
          : "our-service-wrapper background-pink"
      }
    >
      <div className="d-flex flex-direction-column">
        <div className="flex-width pt-5 pr-48">
          <div className="title">
            <h6>Our Services</h6>
          </div>
          <div className="secondaryTitle pt-1 pb-5">
            <h2>Explore Our Services</h2>
          </div>
          <p className="line-height line-clamp-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            neque ac pulvinar sed fermentum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum neque ac pulvinar sed
            fermentum.or sit amet, consectetur adipiscing elit. Vestibulum neque
            ac pulvinar sed fermentum...
          </p>
          <Link href="/services">
            <div className="text-align-center">
              <button className="my-btn">
                See More <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </Link>
        </div>
        <div className="d-flex flex-row flex-width pl-48">
          <div className="d-flex flex-column mt-5">
            <div className="">
              <ServiceCard
                backgroundColor="#263443"
                src="/images/Window installation.svg"
                title="Window Services"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum neque ac pulvinar sed fermentum."
              />
            </div>
            <div className="banner-image">
              <ServiceCard
                src="/images/Door install.svg"
                title="Door Installation"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Vestibulum neque ac pulvinar sed fermentum."
              />
            </div>
          </div>
          <div className="d-flex flex-column">
            <div className="banner-image">
              <ServiceCard
                src="/images/Window installation2.svg"
                title="Window Installation"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Vestibulum neque ac pulvinar sed fermentum."
              />
            </div>
            <div className="banner-image">
              <ServiceCard
                backgroundColor="#263443"
                src="/images/Door service.svg"
                title="Door Services"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Vestibulum neque ac pulvinar sed fermentum."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
