import React from "react";
import "./About.css";
import AboutImg from "../../assets/profile-bnw.png";
import CV from "../../assets/Arya-CV.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
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
            Download CV <i class="uil uil-file-info-alt"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
