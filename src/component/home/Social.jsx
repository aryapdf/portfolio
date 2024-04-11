/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { motion as m } from "framer-motion";

const Social = () => {
  return (
    <m.div
      className="home__social"
      initial={{ opacity: 0, x: -150 }}
      animate={{ opacity: 2, x: 0 }}
      transition={{ duration: 2, ease: "easeOut", delay: 1 }}
    >
      <a
        href="https://www.instagram.com/_aryapdf"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://github.com/aryapdf"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/aryaagnipradana/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
    </m.div>
  );
};

export default Social;
