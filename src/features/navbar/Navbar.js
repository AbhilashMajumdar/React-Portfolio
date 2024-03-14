import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [NavLinkIndex, setNavLinkIndex] = useState(null);
  const navigations = [
    {
      id: 1,
      name: "About",
      link: "about",
    },
    {
      id: 2,
      name: "Experience",
      link: "experience",
    },
    {
      id: 3,
      name: "Projects",
      link: "projects",
    },
    {
      id: 4,
      name: "Education",
      link: "education",
    },
    {
      id: 5,
      name: "Skills",
      link: "skills",
    },
    {
      id: 6,
      name: "Achievements",
      link: "achievements",
    },
    {
      id: 7,
      name: "Certifications",
      link: "certifications",
    },
    {
      id: 8,
      name: "Contact",
      link: "contact",
    },
  ];

  const handleNavState = () => {
    setNav(!nav);
  };

  const handleNavbar = () => {
    if (
      document
        .getElementById("navbarSupportedContent")
        .classList.contains("show")
    ) {
      setNav(!nav);
      document
        .getElementById("navbarSupportedContent")
        .classList.remove("show");
    }

    setNavLinkIndex(null);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="header"
            onClick={handleNavbar}
            smooth={true}
            duration={1000}
            offset={-100}
          >
            Abhilash
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleNavState}
          >
            {!nav ? (
              <GiHamburgerMenu
                style={{ color: "#f2ab00" }}
                size={30}
                className="hamburger"
              />
            ) : (
              <CgClose
                style={{ color: "#f2ab00" }}
                size={35}
                className="hamburger"
              />
            )}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {navigations.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    to={item.link}
                    className={`nav-link mx-1 ${
                      NavLinkIndex === index
                        ? "active"
                        : ""
                    }` }
                    // className="nav-link mx-1"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}
                    onClick={(e) => {
                      handleNavbar();
                      setNavLinkIndex(index);
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
