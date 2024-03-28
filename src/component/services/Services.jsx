import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i capable of</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-palette services__icon"></i>
            <h3 className="services__title">
              Ui/Ux <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal-title">Ui/Ux Designer</h3>
              <p className="services__modal-description">
                Experience in various project and collaborating with front end 
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    Creating design with reference
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    Research feature with user experience
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    User experience simulating feature
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    Choosing tone of color
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    Developing theme for web and apps
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Website <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }>
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal-title">Website Developer</h3>
              <p className="services__modal-description">
                Professional experienced front end developer with many projects and various frameworks
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    Creating web and apps with reference
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    Implementing Ui/Ux design
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    Advance in native build and deploy
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    Accessibilty, OOP and PWAs
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    Responsive and adaptive 
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
