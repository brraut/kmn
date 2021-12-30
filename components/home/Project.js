import React, { useState } from "react";

function Project() {
  return (
    <div className="project-wrapper">
      <div className="pb-5">
        <h2 className="text-center fw-bold fs-1">Our Latest Projects</h2>
      </div>
      <div className="project-container">
        <ProjectImage
          src="/images/latestProject1.png"
          content="Lorem ipsum dolor sit amet, consectetur scing elit. Dui luctus nisi, sapien in amet.Lorem ipsum dolor sit amet, conser adipiscing elit. Dui luctus nisi, sapien in amet...."
          parentDivClassName="item-1"
          projectName="Door Installation"
        />
        <ProjectImage
          src="/images/latestProject2.png"
          content="Lorem ipsum dolor sit amet, consectetur scing elit. Dui luctus nisi, sapien in amet.Lorem ipsum dolor sit amet, conser adipiscing elit. Dui luctus nisi, sapien in amet...."
          parentDivClassName="item-2"
          projectName="Window Installation"
        />
        <ProjectImage
          src="/images/latestProject3.png"
          content="Lorem ipsum dolor sit amet, consectetur scing elit. Dui luctus nisi, sapien in amet.Lorem ipsum dolor sit amet, conser adipiscing elit. Dui luctus nisi, sapien in amet...."
          parentDivClassName="item-3"
          projectName="Automatic Gates"
        />
        <ProjectImage
          src="/images/latestProject4.png"
          content="Lorem ipsum dolor sit amet, consectetur scing elit. Dui luctus nisi, sapien in amet.Lorem ipsum dolor sit amet, conser adipiscing elit. Dui luctus nisi, sapien in amet...."
          parentDivClassName="item-4"
          projectName="Glasses Installation"
        />
        <ProjectImage
          src="/images/latestProject5.png"
          content="Lorem ipsum dolor sit amet, consectetur scing elit. Dui luctus nisi, sapien in amet.Lorem ipsum dolor sit amet, conser adipiscing elit. Dui luctus nisi, sapien in amet...."
          parentDivClassName="item-5"
          projectName="Door Repair"
        />
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
        <div className="title-container pb-3">
          <h5>{projectName}</h5>
        </div>
        <div className=" fs-6 pb-3">
          <h6 className="fw-light content-container">{content}</h6>
        </div>
        <div className="d-flex justify-content-start align-items-center">
          <div className="button">
            <h6 className="mb-0">Read More</h6>
          </div>
          <div>
            <i class="bi bi-arrow-right-short icon-color-white"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
