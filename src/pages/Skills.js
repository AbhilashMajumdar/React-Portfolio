import React from "react";
import Heading from "../components/Heading";
import html from "../images/skills/html.png";
import css from "../images/skills/css.png";
import bootstrap from "../images/skills/bootstrap.png";
import javascript from "../images/skills/javascript.png";
import mongodb from "../images/skills/mongodb.png";
import expressjs from "../images/skills/expressjs.png";
import reactjs from "../images/skills/reactjs.png";
import nodejs from "../images/skills/nodejs.png";
import sass from "../images/skills/sass.png";
import tailwind from "../images/skills/tailwind.png";
import postman from "../images/skills/postman.png";
import github from "../images/skills/github.png";

const Skills = () => {
  const skills1 = [
    {
      id: 1,
      image: html,
      text: "Html",
      bgColor: "#fc490b",
    },
    {
      id: 2,
      image: css,
      text: "CSS",
      bgColor: "#2862e9",
    },
    {
      id: 3,
      image: bootstrap,
      text: "Bootstrap",
      bgColor: "violet",
    },
    {
      id: 4,
      image: javascript,
      text: "JavaScript",
      bgColor: "#ffdf00",
    },
  ];

  const skills2 = [
    {
      id: 5,
      image: reactjs,
      text: "React JS",
      bgColor: "#3998b6",
    },
    {
      id: 6,
      image: nodejs,
      text: "Node JS",
      bgColor: "#58a846",
    },
    {
      id: 7,
      image: expressjs,
      text: "Express JS",
      bgColor: "white",
    },
    {
      id: 8,
      image: mongodb,
      text: "Mongo DB",
      bgColor: "#00684a",
    },
  ];

  const skills3 = [
    {
      id: 9,
      image: sass,
      text: "Sass",
      bgColor: "#cc6698",
    },
    {
      id: 10,
      image: tailwind,
      text: "Tailwind",
      bgColor: "#38bdf8",
    },
    {
      id: 11,
      image: github,
      text: "Github",
      bgColor: "white",
    },
    {
      id: 12,
      image: postman,
      text: "Postman",
      bgColor: "#ee6d3f",
    },
  ];
  return (
    <div id="skills">
      <Heading text={"Skills"} />
      <div className="skills-container mt-5">
        <div className="row justify-content-evenly">
          {skills1.map((skill) => (
            <div className="col-lg-2 col-md-5 col-5 text-center" key={skill.id}>
              <div
                className="skills"
                style={{ boxShadow: `3px 3px 3px 3px ${skill.bgColor}` }}
              >
                <img
                  src={skill.image}
                  alt="html image"
                  width={"60px"}
                  height={"60px"}
                />
                <p style={{ color: skill.bgColor }} className="mt-2 text-bold">
                  {skill.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-evenly">
          {skills2.map((skill) => (
            <div className="col-lg-2 col-md-5 col-5 text-center" key={skill.id}>
              <div
                className="skills"
                style={{ boxShadow: `3px 3px 3px 3px ${skill.bgColor}` }}
              >
                <img
                  src={skill.image}
                  alt="html image"
                  width={"60px"}
                  height={"60px"}
                />
                <p style={{ color: skill.bgColor }} className="mt-2 text-bold">
                  {skill.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-evenly">
          {skills3.map((skill) => (
            <div className="col-lg-2 col-md-5 col-5 text-center" key={skill.id}>
              <div
                className="skills"
                style={{ boxShadow: `3px 3px 3px 3px ${skill.bgColor}` }}
              >
                <img
                  src={skill.image}
                  alt="html image"
                  width={"60px"}
                  height={"60px"}
                />
                <p style={{ color: skill.bgColor }} className="mt-2 text-bold">
                  {skill.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
