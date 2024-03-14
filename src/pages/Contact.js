import React, { useEffect, useRef, useState } from "react";
import Heading from "../components/Heading";
import emailjs from "@emailjs/browser";
import { useAlert } from "react-alert";

const Contact = () => {
  const alert = useAlert();
  let [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  let [contactErr, setContactErr] = useState({
    nameErr: "",
    emailErr: "",
    phoneErr: "",
    messageErr: "",
  });

  let { name, email, phone, message } = contactData;
  let { nameErr, emailErr, phoneErr, messageErr } = contactErr;

  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs
      .sendForm("service_rjoppou", "template_pjayab3", form.current, {
        publicKey: "LKiB_D7alIi5zBxGM",
      })
      .then(
        () => {
          console.log("SUCCESS! message sent ...");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const clearContactData = () => {
    setContactData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const clearContactErr = () => {
    setContactErr({
      nameErr: "",
      emailErr: "",
      phoneErr: "",
      messageErr: "",
    });
  };

  const validateFormData = () => {
    if (!name) {
      nameErr = "Name is required!";
    } else {
      nameErr = "";
    }

    if (!email) {
      emailErr = "Email Address is required!";
    } else {
      emailErr = "";
    }

    if (!phone) {
      phoneErr = "Phone Number is required!";
    } else {
      phoneErr = "";
    }

    if (!message) {
      messageErr = "Message is required!";
    } else {
      messageErr = "";
    }

    if (nameErr || emailErr || phoneErr || messageErr) {
      setContactErr({ nameErr, emailErr, phoneErr, messageErr });
      return false;
    }

    clearContactData();
    clearContactErr();
    return true;
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setContactData({ ...contactData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validateResult = validateFormData();
    if (validateResult) {
      sendEmail(e);
      alert.success("Message has been sent!");
    }
  };

  return (
    <div id="contact">
      <Heading text={"Contact Me"} />
      <div className="contact-container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-10 text-center">
            {/* <form onSubmit={(e)=>{handleSubmit(onSubmit); sendEmail(e)}} ref={form}> */}
            <form ref={form}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => handleInput(e)}
                  className="form-control"
                  id="name"
                  placeholder="Enter Name"
                />
                {nameErr && (
                  <p role="alert" className="text-warning my-2">
                    {nameErr}
                  </p>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => handleInput(e)}
                  className="form-control"
                  id="exampleInputEmail"
                  placeholder="Enter Email Address"
                />
                {emailErr && (
                  <p role="alert" className="text-warning my-2">
                    {emailErr}
                  </p>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => handleInput(e)}
                  className="form-control"
                  id="phone"
                  placeholder="Enter Phone Number"
                />
                {phoneErr && (
                  <p role="alert" className="text-warning my-2">
                    {phoneErr}
                  </p>
                )}
              </div>

              <div className="mb-5">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => handleInput(e)}
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="Enter Message"
                ></textarea>
                {messageErr && (
                  <p role="alert" className="text-warning my-2">
                    {messageErr}
                  </p>
                )}
              </div>

              <div>
                <button type="reset" className="btn btn-outline-warning mx-3">
                  Reset
                </button>
                <button
                  type="submit"
                  className="btn btn-outline-warning"
                  onClick={(e) => handleSubmit(e)}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
