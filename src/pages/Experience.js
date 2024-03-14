import React from "react";
import Heading from "../components/Heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "../../node_modules/react-vertical-timeline-component/style.min.css";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { MdWork } from "react-icons/md";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      component: <RiReactjsLine size={30} />,
      date: "Aug 2023 - Present",
      title: "Programmer Analyst",
      body: "Cognizant, Full Time",
      description: "Jr Software Engineer",
    },
    {
      id: 2,
      component: <RiReactjsLine size={30} />,
      date: "Aug 2022 - Aug 2023",
      title: "Programmer Analyst Trainee",
      body: "Cognizant, Full Time",
      description: "Jr React Developer",
    },
    {
      id: 3,
      component: <IoLogoJavascript size={30} />,
      date: "Feb 2022 - July 2022",
      title: "GenC Elevate Intern",
      body: "Cognizant, Internship",
      description: "Skills :- MongoDB, Express JS, React JS, Node JS",
    },
    // {
    //   id: 4,
    //   component: <MdWork size={30} />,
    //   date: "Sep 2021 - Feb 2022",
    //   title: "Incoming GenC Elevate",
    //   body: "Cognizant, Full Time",
    //   description: "Got placement offer for the GenC Elevate Developer Role",
    // },
  ];

  return (
    <div id="experience">
      <Heading text={"Experience"} />
      <div className="experience-container my-5 text-white">
        <div className="row justify-content-center experience">
          <div className="col-md-10 col-11">
            <VerticalTimeline lineColor="#f2ab00">
              {experiences.map(
                ({ id, component, date, title, body, description }) => (
                  <VerticalTimelineElement
                    key={id}
                    className="vertical-timeline-element"
                    icon={component}
                    iconStyle={{ background: "#f2ab00", color: "#fff" }}
                    date={date}
                  >
                    <h5>{title}</h5>
                    <h6>{body}</h6>
                    <p>{description}</p>
                  </VerticalTimelineElement>
                )
              )}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
