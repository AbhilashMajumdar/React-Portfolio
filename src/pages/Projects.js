import React, { useState } from "react";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const projects = [
    {
      id: 1,
      title: "Verizon VCG - Accessories",
      date: "January 2023 - February 2024",
      link: "https://www.verizon.com/home/accessories/",
      description:
        "Working as Frontend Developer resolving various Accessibility and Production defects in Verizon Website. Developed Banner & Feature accessories sections in Accessories Home page.",
      technologies: "React JS",
    },
    {
      id: 2,
      title: "Ecommerce",
      date: "January 2024 - February 2024",
      link: "https://github.com/AbhilashMajumdar/Ecommerce-with-React-JS-Toolkit-and-JSON-Server",
      description:
        "This Ecommerce project is created using React JS toolkit and Json Server with Admin Panel. User can sign in or login with their credentials and can place the order. Admin can see the users orders and change the order status. As well as admin can perform CRUD operations for the products.",
      technologies: "React JS, Tailwind CSS, Json Server",
    },
    {
      id: 3,
      title: "Portfolio",
      date: "September 2023 - October 2023",
      link: "https://github.com/AbhilashMajumdar/Portfolio-using-ReactJS",
      description:
        'This Portfolio project is created using React JS & Bootstrap. Here I have shown all my informations in separated sections like personal informations in "About" section, education, work, projects etc. Its a full functional frontend website.',
      technologies: "React JS, Bootstrap",
    },
    {
      id: 4,
      title: "Weather App",
      date: "January 2023 - February 2023",
      link: "https://github.com/AbhilashMajumdar/Weather-Application",
      description:
        "This Weather application project is created using React JS & Bootstrap. Here the user need to be entered the city name and based on city name we are fetching the rersponse from the api and showing all the informations like temparature, humidity, sunset, sunrise etc.",
      technologies: "React JS, Bootstrap",
    },
  ];

  const { title, date, link, description, technologies } =
    projects[selectedProjectIndex];

  return (
    <div id="projects">
      <Heading text={"Projects"} />
      <div className="projects-container my-5">
        <div className="row justify-content-evenly my-5 projects">
          <div className="col-lg-3 col-md-5 col-10 align-self-center project-title border-start border-warning border-0.5">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={(e) => setSelectedProjectIndex(index)}
                className={`${
                  selectedProjectIndex === index
                    ? "border-start border-warning border-5"
                    : null
                } px-3`}
                style={{
                  backgroundColor:
                    selectedProjectIndex === index ? "#f2a900a0" : "",
                }}
              >
                {project.title}
              </div>
            ))}
          </div>

          <div className="col-lg-5 col-md-8 col-10 text-white project-info">
            <div className="text-center">
              <h1>{title}</h1>
            </div>
            <h6>
              <span>Technology used</span> - {technologies}
            </h6>
            <p className="my-3">
              <span>Date</span> - {date}
            </p>
            <p className="my-3">
              <span>Description</span> - {description}
            </p>
            {/* <div>
              <span>Link</span> -
              <span>
                <Link to={link} target="_blank">
                  {link}
                </Link>
              </span>
            </div> */}
            <div className="my-3 project-btn">
              <Link to={link} target="_blank">
                <button>Link</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
