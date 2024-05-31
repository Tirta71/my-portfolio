import Aos from "aos";
import React, { useEffect } from "react";
import { experienceData, educationData } from "../Data/experienceData";

export default function Resume() {
  useEffect(() => {
    Aos.init({
      duration: 1200, // Animation duration
    });
  }, []);

  return (
    <section id="resume" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container" data-aos="fade-up">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">RESUME</h4>
          <h2 className="st-section-heading-subtitle">RESUME</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
      <div className="container">
        <div className="row">
          {/* <!-- Experience --> */}
          <div className="col-lg-6">
            <div className="st-resume-wrap">
              <div className="st-resume-heading" data-aos="fade-up">
                <img src="assets/img/icon/resume-icon1.png" alt="resume-icon" />
                <h2 className="st-resume-heading-title">Experience</h2>
              </div>

              <div className="st-height-b50 st-height-lg-b30"></div>

              <div className="st-resume-timeline-wrap">
                {experienceData.map((experience, index) => (
                  <div
                    className="st-resume-timeline"
                    data-aos="fade-up"
                    key={index}
                  >
                    <h3 className="st-resume-timeline-title mt-5">
                      {experience.title}
                    </h3>
                    <div className="st-resume-timeline-duration">
                      {experience.duration}
                    </div>
                    <h4 className="st-resume-timeline-subtitle">
                      {experience.location}
                    </h4>
                    <div className="st-resume-timeline-text">
                      <p>{experience.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <!-- Education --> */}
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b50"></div>
            <div className="st-resume-wrap">
              <div className="st-resume-heading" data-aos="fade-up">
                <img src="assets/img/icon/resume-icon2.png" alt="resume-icon" />
                <h2 className="st-resume-heading-title">Education</h2>
              </div>
              <div className="st-height-b50 st-height-lg-b30"></div>

              <div className="st-resume-timeline-wrap">
                {educationData.map((education, index) => (
                  <div
                    className="st-resume-timeline"
                    data-aos="fade-up"
                    key={index}
                  >
                    <h3 className="st-resume-timeline-title mt-5">
                      {education.title}
                    </h3>
                    <div className="st-resume-timeline-duration">
                      {education.duration}
                    </div>
                    <h4 className="st-resume-timeline-subtitle">
                      {education.location}
                    </h4>
                    <div className="st-resume-timeline-text">
                      <p>{education.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
}
