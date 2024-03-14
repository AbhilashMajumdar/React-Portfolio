import React, { useState } from "react";
import Heading from "../components/Heading";
import cognizant from "../images/achievement/Cognizant/cognizant.jpg";
import bakerst from "../images/achievement/BakerSt/bakerst.jpg";
import hackerrank from "../images/achievement/HackerRank/hackerrank.webp";
import { Link } from "react-router-dom";

const Achievements = () => {
  const [selectedAchievementIndex, setSelectedAchievementIndex] = useState(0);
  const achievements = [
    {
      id: 1,
      title: "Cognizant",
      date: "January 2022 - Present",
      description:
        "Got selected as a Programmer Analyst Trainee on Campus Placement 2021",
      link: "https://mail.google.com/mail/u/0/#search/selected+in+Cognizant/FMfcgzGqPzJRDRGlqJGKLgdLCXXbsnGZ",
      image: cognizant,
      company_link: "https://www.cognizant.com/in/en",
    },
    {
      id: 2,
      title: "221 B Baker Street",
      date: "March 2022",
      description:
        "Got selected as a Salesforce Developer on Campus Placement 2022.",
      link: "https://mail.google.com/mail/u/0/#search/cyan%40twotwo1bbs.com/FMfcgzGmvLMGQxrHjdsQfWbkzBTlBzsw",
      image: bakerst,
      company_link: "https://www.twotwo1bbs.com/",
    },
    {
      id: 3,
      title: "HackerRank",
      date: "June 2021 - April 2022",
      description:
        "5* at HackerRank (Problem Solving), CPP, JAVA , SQL & C Language.",
      link: "https://www.hackerrank.com/profile/abhilashmajumda1",
      image: hackerrank,
      company_link: "https://www.hackerrank.com/",
    },
  ];

  const { title, date, description, link, image, company_link } =
    achievements[selectedAchievementIndex];

  return (
    <div className="achievements">
      <Heading text={"Achievements"} />
      <div className="achievement-container my-5">
        <div className="row justify-content-evenly my-5">
          <div className="col-lg-2 col-md-5 col-10 achievement-heading align-self-center border-start border-warning border-0.5">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                onClick={(e) => setSelectedAchievementIndex(index)}
                className={`${
                  selectedAchievementIndex === index
                    ? "border-start border-warning border-5"
                    : null
                } px-3`}
                style={{
                  backgroundColor:
                    selectedAchievementIndex === index ? "#f2a900a0" : "",
                }}
              >
                {achievement.title}
              </div>
            ))}
          </div>

          <div className="col-lg-6 col-md-8 col-10 achievement-info">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <h1>{title}</h1>
              </div>
            </div>

            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-4 col-12 achievement-img">
                <Link to={company_link} target="_blank">
                  <img
                    src={image}
                    alt={title}
                  />
                </Link>
              </div>
              <div className="col-lg-6 col-md-6 col-12 align-self-center achievement-data">
                <p>{date}</p>
                <p>{description}</p>
                <div className="my-3 achievement-btn">
                  <Link to={link} target="_blank">
                    <button>Link</button>
                  </Link>
                </div>
              </div>
            </div>

            {/* <div>
              <div className="text-center">
                <h1>{title}</h1>
              </div>
              <Link to={company_link} target="_blank">
                <img src={image} alt={title} width={"300px"} height={"200px"} />
              </Link>
              <p>{date}</p>
              <p>{description}</p>
              <div className="my-3">
                <Link to={link} target="_blank">
                  <button>Link</button>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
