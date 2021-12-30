import React from "react";

function Body() {
  return (
    <div className="contact-us">
      <div class="container pt-5 mb-5">
        <div class="row pt-4">
          <div class="col-md-7	col-lg-7	col-xl-7	col-xxl-7">
            <div className="secondaryTitle">
              <h1 className="fw-bold">Get in touch</h1>
            </div>
            <div>
              <p className="text-black-50 fs-12">
                Feel free to drop us a line below!
              </p>
            </div>
            <form>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="fw-500 form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control w-75 form-input"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="fw-500 form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control w-75 form-input"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="fw-500 form-label">
                  Message
                </label>
                <textarea
                  type="text"
                  class="form-control w-75 form-input form-textArea"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
              <button className="my-btn mt-4 mb-5">Send Message</button>
            </form>
          </div>
          <div class="col-md-5	col-lg-5	col-xl-5	col-xxl-5">
            <div className="pt-5">
              <div className="secondaryTitle text-center">
                <h1 className="fw-bold color-dark">Contact us</h1>
              </div>
              <div className="pt-3 d-flex align-items-center mb-2">
                <i class="bi bi-geo-alt-fill color-dark fs-26 me-5"></i>
                <h5 className="fw-normal mb-0">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </h5>
              </div>
              <div className="pt-3 d-flex align-items-center mb-2">
                <i class="bi bi-telephone-fill color-dark fs-26 me-5"></i>
                <h5 className="fw-normal mb-0">(406) 555789</h5>
              </div>
              <div className="pt-3 d-flex align-items-center mb-4">
                <i class="bi bi-envelope color-dark fs-26 me-5"></i>
                <h5 className="fw-normal mb-0">kmn@gmail.com</h5>
              </div>
              <div className="">
                <h5>See in map</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
