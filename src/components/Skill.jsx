import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import React, { useEffect } from "react";

export default function Skill({ skills }) {
  useEffect(() => {
    Aos.init({
      duration: 1200, // Animation duration
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="st-dark-bg py-5" id="my-skill">
      <div className="container" data-aos="fade-up">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">MY SKILLS</h4>
          <h2 className="st-section-heading-subtitle">MY SKILLS</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>

        <div className="row g-4">
          {skills.slice(0, 3).map((skill, index) => (
            <div
              className="col-lg-4 col-md-4 col-sm-6 mb-4"
              key={index}
              data-aos="fade-left"
              data-aos-delay={index * 200} // Menambahkan penundaan animasi
            >
              <div className="card text-center bg-dark border border-warning">
                <div className="card-body">
                  <img
                    src={skill.icon}
                    alt={`${skill.title} icon`}
                    className="mb-3"
                    style={{ width: "64px", height: "64px" }}
                  />
                  <h5 className="card-title text-light">{skill.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row g-4 mt-4">
          {skills.slice(3, 7).map((skill, index) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              key={index}
              data-aos="fade-left"
              data-aos-delay={(index + 3) * 200} // Menambahkan penundaan animasi
            >
              <div className="card text-center bg-dark border border-warning">
                <div className="card-body">
                  <img
                    src={skill.icon}
                    alt={`${skill.title} icon`}
                    className="mb-3"
                    style={{ width: "64px", height: "64px" }}
                  />
                  <h5 className="card-title text-light">{skill.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row g-4 mt-4">
          {skills.slice(7).map((skill, index) => (
            <div
              className="col-12 col-md-6 mb-4"
              key={index}
              data-aos="fade-left"
              data-aos-delay={(index + 7) * 200} // Menambahkan penundaan animasi
            >
              <div className="card text-center bg-dark border border-warning">
                <div className="card-body">
                  <img
                    src={skill.icon}
                    alt={`${skill.title} icon`}
                    className="mb-3"
                    style={{ width: "64px", height: "64px" }}
                  />
                  <h5 className="card-title text-light">{skill.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
