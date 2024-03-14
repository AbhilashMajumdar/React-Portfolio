import React, { lazy, Suspense, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./features/navbar/Navbar";
import Loader from "./components/Loader";
import ParticlesContainer from "./components/ParticlesContainer";
import Footer from "./components/Footer";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Experience = lazy(() => import("./pages/Experience"));
const Projects = lazy(() => import("./pages/Projects"));
const Education = lazy(() => import("./pages/Education"));
const Skills = lazy(() => import("./pages/Skills"));
const Achievements = lazy(() => import("./pages/Achievements"));
const Certifications = lazy(() => import("./pages/Certifications"));
const Contact = lazy(() => import("./pages/Contact"));

const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: "60px",
  transition: transitions.SCALE,
};

const App = () => {
  return (
    <>
      <AlertProvider template={AlertTemplate} {...options}>
        <Router>
          <ParticlesContainer />
          <Navbar />
          {/* <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home nav={nav}/>} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense> */}
          {/* Instead of react-wouting we are using react-scroll package  */}
          <Home />
          <Footer />
        </Router>
      </AlertProvider>
    </>
  );
};

export default App;
