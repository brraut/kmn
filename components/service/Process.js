import React from "react";

function Process() {
  return (
    <div className="background-pink process-wrapper pt-5">
      <div className="title text-center py-4">
        <h6>Our Process</h6>
      </div>
      <div className="secondaryTitle text-center pb-5">
        <h2>Four steps to order window for your home</h2>
      </div>
      <div className="d-flex pt-5">
        <Card
          src="/images/Window installation.svg"
          title="Make Appointment"
          content="You can call to make an appointment"
        />
      </div>
    </div>
  );
}

const Card = ({ src, title, content }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="background-dark p-4 image-width">
        <img src={src} />
      </div>
      <div>
        <h5 className="text-center">{title}</h5>
        <h6 className="fw-light text-center">{content}</h6>
      </div>
    </div>
  );
};
export default Process;
