import Link from "next/link";
import React from "react";
import ServiceCard from "./common/ServiceCard";

function Service({ type = "", context }) {
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
            {context?.service_section?.excerpt}...
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
                src={context?.services[0]?.icon || ""}
                title={context?.services[0]?.title || ""}
                slug={context?.services[0]?.slug || ""}
                content={context?.services[0]?.excerpt + "..." || ""}
              />
            </div>
            <div className="banner-image">
              <ServiceCard
                src={context?.services[1]?.icon || ""}
                title={context?.services[1]?.title || ""}
                slug={context?.services[1]?.slug || ""}
                content={context?.services[1]?.excerpt + "..." || ""}
              />
            </div>
          </div>
          <div className="d-flex flex-column">
            <div className="banner-image">
              <ServiceCard
                src={context?.services[2]?.icon || ""}
                title={context?.services[2]?.title || ""}
                slug={context?.services[2]?.slug || ""}
                content={context?.services[2]?.excerpt + "..." || ""}
              />
            </div>
            <div className="banner-image">
              <ServiceCard
                backgroundColor="#263443"
                src={context?.services[3]?.icon || ""}
                title={context?.services[3]?.title || ""}
                slug={context?.services[3]?.slug || ""}
                content={context?.services[3]?.excerpt + "..." || ""}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
