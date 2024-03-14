import React from "react";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Certifications from "./Certifications";
import Contact from "./Contact";
import Header from "./Header";

const Home = ({ nav }) => {
  return (
    <>
      {!nav ? (
        <>
          <Header />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <Achievements />
          <Certifications />
          <Contact />
        </>
      ) : null}
    </>
  );
};

export default Home;
