import React, { useState } from "react";
import Slider from "react-slick";

/* components */

function TeamMember() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="blog-wrapper pb-5 mb-5">
      <div className="title pb-2">
        <h6 className="text-center">Our Team</h6>
      </div>
      <div className="secondaryTitle pb-5">
        <h2 className="text-center">Meet Our Team</h2>
      </div>
      <div>
        <Slider {...settings}>
          <div className="slider-card">
            <MemberImage
              src="/images/member2.png"
              designation="Technician"
              name="Anmol Sarao"
            />
          </div>
          <div className="slider-card">
            <MemberImage
              src="/images/member1.png"
              designation="Developer"
              name="Jonny Singh"
            />
          </div>
          <div className="slider-card">
            <MemberImage
              src="/images/member2.png"
              designation="Technician"
              name="Anmol Sarao"
            />
          </div>
          <div className="slider-card">
            <MemberImage
              src="/images/member2.png"
              designation="Technician"
              name="Anmol Sarao"
            />
          </div>
          <div className="slider-card">
            <MemberImage
              src="/images/member1.png"
              designation="Developer"
              name="Suyog Singh"
            />
          </div>
          <div className="slider-card">
            <MemberImage
              src="/images/member2.png"
              designation="Technician"
              name="Anmol Sarao"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

const MemberImage = ({ src = "", name = "", designation = "" }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  console.log("hover", hovered);
  return (
    <div
      className="card team-member"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <img src={src} className="w-100 h-100" alt="" />
      <div className={hovered ? "on-hover-project" : ""}></div>
      {/* <div className="on-hover-project"></div> */}

      <div className={hovered ? "body w-100 px-4 py-5" : "display-none"}>
        {/* <div className="body w-100 px-4 pt-5 pb-5"> */}
        <div className="title-container pb-1">
          <h5 className="text-center">{name}</h5>
        </div>
        <div className=" fs-6">
          <h5 className="text-white fw-light text-center content-container">
            {designation}
          </h5>
        </div>
        <div className="pb-4 px-5 d-flex justify-content-center">
          <i class="bi bi-facebook text-white social-media  px-3"></i>
          <i class="bi bi-instagram text-white social-media  px-3"></i>
          <i class="bi bi-twitter text-white social-media  px-3"></i>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
