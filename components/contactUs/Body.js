import React, { useState } from "react";
import { postContactApi } from "../../api/contact/contactApi";

function Body({ context }) {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors();
    setLoading(true);
    postContactApi(contactData)
      .then((res) => {
        setLoading(false);
        setContactData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        alert(res?.data?.message);
      })
      .catch((err) => {
        setLoading(false);
        setErrors(err?.response?.data?.errors);
      });
  };

  const handleChange = (e) => {
    errors && setErrors();
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-us">
      <div className="container pt-5 mb-5">
        <div className="row pt-4">
          <div className="col-md-7	col-lg-7	col-xl-7	col-xxl-7">
            <div className="secondaryTitle">
              <h1 className="fw-bold">Get in touch</h1>
            </div>
            <div>
              <p className="text-black-50 fs-12">
                Feel free to drop us a line below!
              </p>
            </div>
            <form>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="fw-500 form-label"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={contactData?.name}
                  className="form-control w-75 form-input"
                  id="exampleFormControlInput1"
                  placeholder="Enter Full Name"
                />
                <span className="text-danger">{errors?.name}</span>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="fw-500 form-label"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={contactData?.email}
                  className="form-control w-75 form-input"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Email"
                />
                <span className="text-danger">{errors?.email}</span>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="fw-500 form-label"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  value={contactData?.phone}
                  className="form-control w-75 form-input"
                  id="exampleFormControlInput1"
                  placeholder="Enter Phone Number"
                />
                <span className="text-danger">{errors?.phone}</span>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="fw-500 form-label"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  onChange={handleChange}
                  className="form-control w-75 form-input form-textArea"
                  id="exampleFormControlInput1"
                  placeholder="Please type the message"
                  value={contactData?.message}
                />
                <span className="text-danger">{errors?.message}</span>
              </div>
              <button
                className="my-btn mt-4 mb-5"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          <div className="col-md-5	col-lg-5	col-xl-5	col-xxl-5">
            <div className="pt-5">
              <div className="secondaryTitle text-center">
                <h1 className="fw-bold color-dark">Contact us</h1>
              </div>
              <div className="pt-3 d-flex align-items-center mb-2">
                <i className="bi bi-geo-alt-fill color-dark fs-26 me-5"></i>
                <h5 className="fw-normal mb-0">{context?.address}</h5>
              </div>
              <div className="pt-3 d-flex align-items-center mb-2">
                <i className="bi bi-telephone-fill color-dark fs-26 me-5"></i>
                <h5 className="fw-normal mb-0">{context?.primary_phone}</h5>
              </div>
              <div className="pt-3 d-flex align-items-center mb-4">
                <i className="bi bi-envelope color-dark fs-26 me-5"></i>
                <h5 className="fw-normal mb-0">{context?.primary_email}</h5>
              </div>
              <div className="">
                <h5>See in map</h5>
                <div
                  dangerouslySetInnerHTML={{ __html: context?.map_location }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
