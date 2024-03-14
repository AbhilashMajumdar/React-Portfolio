import React from "react";
import Heading from "../components/Heading";
import pic from "../images/pic/pic.jpg";

const About = () => {
  return (
    <div className="about-section" id="about">
      <Heading text={"About Me"} />
      <div className="row my-5 about-container justify-content-center">
        <div className="col-lg-4 col-md-4 text-center col-10 my-5 img-div">
          <img src={pic} alt="Profile pic" />
        </div>
        <div className="col-lg-6 col-md-6 col-10 align-self-center about">
          <p>
            I love to code, design and program. I have learned Html, Css, Java
            Script, Bootstrap, tailwind css, sass, React JS, node JS, express
            JS, MongoDB. I have interest in Web Development. Currently focusing
            on React JS & Node JS. I have worked on several MERN projects. I'm
            always up for learning new things.
          </p>
        </div>
      </div>

      <div className="row my-5 justify-content-center about-container">
        <div className="col-lg-3 col-10">
          <div className="my-3">
            <span>Name</span>
            <span>{" - "}</span>
            <span className="value">Abhilash Majumdar</span>
          </div>
          <div>
            <span>Job</span>
            <span>{" - "}</span>
            <span className="value">Programmer Analyst</span>
          </div>
        </div>

        <div className="col-lg-3 col-10">
          <div className="my-3">
            <span>Date of Birth</span>
            <span>{" - "}</span>
            <span className="value">30th June, 1998</span>
          </div>
          <div>
            <span>Phone</span>
            <span>{" - "}</span>
            <span className="value">7872909202</span>
          </div>
        </div>
        <div className="col-lg-4 col-10">
          <div className="my-3">
            <span>Address</span>
            <span>{" - "}</span>
            <span className="value">Mankar, Purba Bardhaman, West Bengal</span>
          </div>
          <div>
            <span>Email</span>
            <span>{" - "}</span>
            <span className="value">abhilashmajumdar306@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
