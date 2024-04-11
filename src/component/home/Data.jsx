import React from "react";
import { motion as m } from 'framer-motion'

const Data = () => {
  return (
    <m.div className="home__data"
    initial={{ opacity: 0, x:-150 }}
    animate={{ opacity: 1, x: 0}}
    transition={{ duration: 2, ease: "easeOut", delay: 1 }}>
      <h1 className="home__title">Arya Pradana</h1>
      <h3 className="home__subtitle">Front-End Developer</h3>
      <p className="home__description">
        I am a logical and results-driven web developer who is very passionate
        and dedicated to programming.
      </p>

      <a href="#contact" className="button button--flex">
        <p>
          Say Hello <i className="uil uil-location-arrow" ></i>
        </p>
      </a>
    </m.div>
  );
};

export default Data;
