import React, { useState } from "react";

function Project({ context }) {
  return (
    <div className="project-wrapper">
      <div className="pb-5">
        <h2 className="text-center fw-bold fs-1">Our Latest Projects</h2>
      </div>
      <div className="project-container">
        {/* <ProjectImage
          src={context?.portfolio[0]?.image}
          content=""
          parentDivClassName="item-1"
          projectName={context?.portfolio[0]?.title}
        /> */}
        {context?.portfolio.map((work, index) => (
          <ProjectImage
            src={work?.image}
            content=""
            projectName={work?.title}
            parentDivClassName={`item-${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
const ProjectImage = ({
  parentDivClassName = "",
  src = "",
  projectName = "",
  content = "",
}) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  console.log("hover", hovered);
  return (
    <div
      className={parentDivClassName}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <img src={src} className="w-100 h-100" alt="" />
      <div className={hovered ? "on-hover-project" : "gradient"}></div>
      <div className={hovered ? "display-none" : "content"}>
        <h5>{projectName}</h5>
      </div>
      <div className={hovered ? "body p-5" : "display-none"}>
        <div className="title-container">
          <h5 className="mb-0">{projectName}</h5>
        </div>
        <div className=" fs-6">
          <h6 className="fw-light content-container">{content}</h6>
        </div>
        <div className="d-flex justify-content-start align-items-center">
          <div className="button">
            <h6 className="mb-0">Read More</h6>
          </div>
          <div>
            <i className="bi bi-arrow-right-short icon-color-white"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
