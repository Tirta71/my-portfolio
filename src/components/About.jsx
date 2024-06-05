import React, { useEffect } from "react";
import TirtaImage from "../gambar/my_profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/about.css"; // Import custom CSS

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);

  return (
    <section id="about" className="st-about-wrap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="st-about-img-wrap">
              <img
                src={TirtaImage}
                alt="Tirta"
                className="st-about-img"
                style={{ height: "200px", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="st-about-text-wrap">
              <p className="welcome-text">Hello, Welcome</p>
              <h1 className="st-about-title">I'm Tirta Samara</h1>
              <p className="st-about-description">
                As a web developer, I have advanced skills in HTML, CSS, and
                JavaScript, along with experience in frameworks like React.js
                Next.js, Bootstrap, and Tailwind CSS. I have worked with
                TypeScript for adding static type definitions, and have
                intermediate knowledge of back-end technologies such as Laravel
                . My proficiency extends to using Sass for writing maintainable
                CSS and building responsive, dynamic web applications.
              </p>
              <a
                href="uploads/CV_ATS_TIRTA.pdf"
                className="st-btn st-style1 st-color1"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
