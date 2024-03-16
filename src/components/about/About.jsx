import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpeg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { PiCertificateLight } from "react-icons/pi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__card__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <PiCertificateLight className="about__card__icon" />
              <h5>Certificat</h5>
              <small>10+ Done</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__card__icon" />
              <h5>Project</h5>
              <small>25+ Completed</small>
            </article>
          </div>
          <p>
            As an engineering student specializing in computer science, my
            passion lies in using technology to create user-friendly web
            experiences. With expertise in HTML, CSS, and JavaScript, I bring
            designs to life and strive for clean interfaces. I enjoy
            collaborating in dynamic teams, continually learning, and delivering
            high-quality solutions
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
