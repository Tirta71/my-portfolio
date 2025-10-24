import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { experienceData, educationData } from "../Data/experienceData";
import "./css/resume.css";

export default function Resume() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  // Education dulu, baru Experience
  const combinedData = [
    ...educationData.map((d) => ({ ...d, type: "education" })),
    ...experienceData.map((d) => ({ ...d, type: "experience" })),
  ];

  return (
    <section id="resume" className="st-dark-bg py-5">
      <div className="container" data-aos="fade-up">
        {/* Heading */}
        <div className="st-section-heading st-style1 text-center mb-5">
          <h4 className="st-section-heading-title">RESUME</h4>
          <h2 className="st-section-heading-subtitle">Timeline</h2>
        </div>

        {/* Timeline */}
        <div className="timeline position-relative">
          <div className="timeline-line" />

          {combinedData.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              {/* Card */}
              <div className="timeline-content">
                <h3
                  className={`timeline-title ${
                    item.type === "education" ? "edu" : "exp"
                  }`}
                >
                  {item.title}
                </h3>
                <span className="timeline-duration">{item.duration}</span>
                <h5 className="timeline-location">{item.location}</h5>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
