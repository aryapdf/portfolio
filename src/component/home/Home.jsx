import React from "react";
import "./Home.css";

import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

import { motion as m } from "framer-motion";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <m.div
            className="home__img"
            initial={{ opacity: 0, x:150 }}
            animate={{ opacity: 2, x: 0}}
            transition={{ duration: 2, ease: "easeOut", delay: 1 }}
          ></m.div>

          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
