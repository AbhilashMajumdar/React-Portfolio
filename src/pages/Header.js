import React from "react";
import { ReactTyped } from "react-typed";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import cv from "../documents/Abhilash_Majumdar.pdf";
const Header = () => {
  const socialIcons = [
    {
      id: 1,
      url: "https://www.facebook.com/abhilash.majumdar.1/",
      component: <FaFacebook size={30} />,
    },
    {
      id: 2,
      url: "https://www.linkedin.com/in/abhilash-majumdar-b20b0112a/",
      component: <FaLinkedin size={30} />,
    },
    {
      id: 3,
      url: "https://twitter.com/valentineabhi",
      component: <FaTwitter size={30} />,
    },

    {
      id: 4,
      url: "https://github.com/AbhilashMajumdar",
      component: <FaGithub size={30} />,
    },
    {
      id: 5,
      url: "mailto:abhilashmajumdar306@gmail.com",
      component: <IoMdMail size={30} />,
    },
  ];

  return (
    <div id="header">
      <div className="header-container">
        <div className="header text-center">
          <div className="heading">
            <h1>Abhilash Majumdar</h1>
          </div>
          <div className="header-body mt-3">
            <h3>
              I am a{" "}
              <span>
                <ReactTyped
                  className="typed-text"
                  strings={[
                    "Software Engineer",
                    "Web Developer",
                    "React Developer",
                  ]}
                  typeSpeed={60}
                  backSpeed={60}
                  loop={Infinity}
                />
              </span>
            </h3>
          </div>
          <div className="header-social my-3">
            {socialIcons.map(({ id, url, component }) => (
              <Link to={url} target="_blank" rel="noreferrer" key={id}>
                <span className="header-icon">{component}</span>
              </Link>
            ))}
          </div>
          <div className="header-btn my-3">
            <a href={cv} download={"Abhilash Majumdar"} rel="noreferrer">
              <button className="download-btn">Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
