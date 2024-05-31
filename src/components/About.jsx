import React, { useEffect } from "react";
import TirtaImage from "../gambar/my_profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);

  return (
    <section id="about" className="st-about-wrap">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1" data-aos="fade-up">
          <h4 className="st-section-heading-title">ABOUT ME</h4>
          <h2 className="st-section-heading-subtitle">ABOUT ME</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="st-about-img-wrap">
              <div className="st-about-img st-dynamic-bg st-bg">
                <img
                  src={TirtaImage}
                  alt="Tirta.jpg"
                  style={{
                    height: "500px",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </div>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="st-vertical-middle">
              <div className="st-vertical-middle-in">
                <div className="st-text-block st-style1">
                  <h2 className="st-text-block-title">
                    Hi There! I'm Tirta Samara
                  </h2>
                  <h4 className="st-text-block-subtitle">Web Developer</h4>
                  <div className="st-text-block-text">
                    <p>
                      As a web developer, I have a strong background in
                      designing and developing websites and web applications. I
                      am proficient in programming languages such as HTML, CSS,
                      and JavaScript, and have experience using frameworks and
                      tools such as React, Vue.js, or Angular.
                    </p>
                  </div>
                  <ul className="st-text-block-details st-mp0">
                    <li>
                      <span>Birthday</span> : <span>October 08, 2001</span>
                    </li>
                    <li>
                      <span>Phone</span> : <span>+62 812 849 645 33</span>
                    </li>
                    <li>
                      <span>Email</span> : <span>tirta4132@gmail.com</span>
                    </li>
                    <li>
                      <span>From</span> :
                      <span>Indonesia , Bogor Tanah Sereal</span>
                    </li>
                    <li>
                      <span>Language</span> : <span>English , Indonesia</span>
                    </li>
                    <li>
                      <span>Freelance</span> : <span>Available</span>
                    </li>
                  </ul>
                  <div className="st-text-block-btn">
                    <a
                      href="uploads/CV_ATS.pdf"
                      className="st-btn st-style1 st-color1"
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
