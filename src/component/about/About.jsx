import React from "react";
import "./About.css";

import AboutImg from "../../assets/profile-bnw.png";
import CV from "../../assets/Arya-CV.pdf";
import Info from "./Info";

import { motion as m } from "framer-motion";



const About = () => {
  return (
    <m.section
      className="about section"
      id="about"
      initial={{ opacity: 0, y: -150}}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: true, amount: 0.5}}
      transition={{ duration: 2, type:'easeOut'}}
    >

        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
          <img src={AboutImg} alt="About" className="about__img" />
          <div className="about__data">
            <Info />
            <p className="about__description">
              Front-End Developer, who aim to be a Fullstack Web Developer. I
              design web pages with UI/UX preference. Experienced working with
              teams, eager to learn and explore something new.
            </p>

            <a download="" href={CV} className="button button--flex">
              Download CV <i className="uil uil-file-info-alt"></i>
            </a>
          </div>
        </div>
    </m.section>
  );
};

export default About;
