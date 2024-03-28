import React from "react";
import pict1 from "../../assets/viyo-latte-bg.png";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={pict1} alt="Sample" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <p className="work__subtitle">{item.subtitle}</p>
      <div>
        <a
          href={item.view}
          className="work__button"
          target="_blank"
          rel="noreferrer"
        >
          View <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>

      </div>
    </div>
  );
};

export default WorkItems;
