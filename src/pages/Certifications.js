import React from "react";
import Heading from "../components/Heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "../../node_modules/react-vertical-timeline-component/style.min.css";
import { SiJavascript } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import { TbBrandRedux } from "react-icons/tb";
import { Link } from "react-router-dom";

const Certifications = () => {
  const certificates = [
    {
      id: 1,
      title: "Executive Briefing: Artificial Intelligence (AI) + ChatGPT",
      desc: "Udemy, Cognizant",
      link: "https://cognizant.udemy.com/certificate/UC-69083538-0c36-4276-b3ca-8fba6af6b8ad/",
      date: "February 2024 - March 2024",
      component: <GiArtificialIntelligence size={30} />,
    },
    {
      id: 2,
      title: "The Ultimate Redux Course 2023 - [LATEST Redux-toolkit]",
      desc: "Udemy, Cognizant",
      link: "https://cognizant.udemy.com/certificate/UC-390ae2e6-659b-4387-85b9-17b5190c78d8/",
      date: "October 2023 - November 2023",
      component: <TbBrandRedux size={30} />,
    },
    {
      id: 3,
      title: "The Complete JavaScript Course 2022: From Zero to Expert!",
      desc: "Udemy, Cognizant",
      link: "https://cognizant.udemy.com/certificate/UC-040c4cb4-a860-494c-8862-6bdb191b217a/",
      date: "March 2022 - April 2022",
      component: <SiJavascript size={30} />,
    },
    {
      id: 4,
      title: "Front-End Web Development with React",
      desc: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/certificate/LPPJB2SZVNBS",
      date: "Oct 2021 - Nov 2021",
      component: <RiReactjsLine size={30} />,
    },
    {
      id: 5,
      title:
        "Build Responsive Real-World Websites with HTML, CSS and Bootstrap",
      desc: "Udemy, Cognizant",
      link: "https://cognizant.udemy.com/certificate/UC-addbb2d7-8cb8-4cfd-9743-8544a6215eda/",
      date: "Feb 2022 - March 2022",
      component: <DiJavascript size={30} />,
    },

    // {
    //   id: 4,
    //   title: "Learn Python Programming : Step By Step Guide for Beginners",
    //   desc: "Udemy",
    //   link: "https://www.udemy.com/certificate/UC-054a5d40-40fb-4be3-92d0-8e4888cdf4ad/",
    //   date: "Oct 2020 - Nov 2020",
    //   component: <FaPython size={30} />,
    // },
    // {
    //   id: 5,
    //   title: "Programming with C++ Language: The Complete Course",
    //   desc: "Udemy",
    //   link: "https://www.udemy.com/certificate/UC-3e30672d-9535-4ab1-afee-0cad7e1528c5/",
    //   date: "Sept 2020 - Oct 2020",
    //   component: <SiCplusplus size={30} />,
    // },
    // {
    //   id: 6,
    //   title: "Java (Basic)",
    //   desc: "HackerRank",
    //   link: "https://www.hackerrank.com/certificates/235ed866d52f",
    //   date: "June 2021 - June 2021",
    //   component: <FaJava size={30} />,
    // },
    // {
    //   id: 7,
    //   title: "SQL (Intermediate)",
    //   desc: "HackerRank",
    //   link: "https://www.hackerrank.com/certificates/f1aa7b8a2ed7",
    //   date: "June 2021 - June 2021",
    //   component: <SiMysql size={30} />,
    // },
    // {
    //   id: 8,
    //   title: "SQL (Basic)",
    //   desc: "HackerRank",
    //   link: "https://www.hackerrank.com/certificates/5daef14b5ea4",
    //   date: "June 2021 -June 2021",
    //   component: <AiOutlineConsoleSql size={30} />,
    // },
  ];
  return (
    <div id="certifications">
      <Heading text={"Certificates"} />
      <div className="certifications-container my-5 text-white">
        <div className="row justify-content-center certificate">
          <div className="col-md-10 col-11">
            <VerticalTimeline lineColor="#f2ab00">
              {certificates.map(
                ({ id, title, desc, link, date, component }, index) => (
                  <VerticalTimelineElement
                    key={index}
                    className="vertical-timeline-element"
                    icon={component}
                    iconStyle={{ background: "#f2ab00", color: "#fff" }}
                    date={date}
                  >
                    <h5>{title}</h5>
                    <h6>{desc}</h6>
                    <div className="certificate-btn">
                      <Link to={link} target="_blank">
                        <button>See Certificate</button>
                      </Link>
                    </div>
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

export default Certifications;
