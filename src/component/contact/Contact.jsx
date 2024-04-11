import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Bounce, ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  //Email Function for Form
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ifyib3b", "template_o3xvc2p", form.current, {
        publicKey: "q_g1Gdvg-wwunbYEA",
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log("SUCCESS!");
          toast.success("Message Sent!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          document.getElementById("contactForm").reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast("Something wrong!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                aryaagnipradana@gmail.com
              </span>

              <a
                href="mailto:aryaagnipradana@gmail.com"
                className="contact__button"
              >
                Mail Me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+62 813 6889 9879</span>

              <a
                href="https://api.whatsapp.com/send?phone=6281368899879&text=Hello, I'm interested on your website!"
                className="contact__button"
                target="_blank"
                rel="noreferrer"
              >
                Text Me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form
            action=""
            className="contact__form"
            ref={form}
            onSubmit={sendEmail}
            id="contactForm"
          >
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                className="contact__form-input"
                placeholder="Insert your name"
                required
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Mail
              </label>
              <input
                type="email"
                name="user_email"
                className="contact__form-input"
                placeholder="Insert your email"
                required
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Subject
              </label>
              <input
                type="text"
                name="user_subject"
                className="contact__form-input"
                placeholder="Insert subject"
                required
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="" className="contact__form-tag">
                Project
              </label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your project"
                required
              />
            </div>

            <button
              href="#contact"
              className="button button--flex"
              type="submit"
              value="Send"
            >
              <p>
                Send Message <i className="uil uil-message"></i>
              </p>
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
