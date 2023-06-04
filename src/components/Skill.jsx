import React, { useEffect } from "react";

export default function Skill({ skills }) {
  useEffect(() => {
    progressBarInit();
  }, []);

  function progressBarInit() {
    const progressBars = document.querySelectorAll(".st-progressbar");
    progressBars.forEach((progressBar) => {
      const progressPercentage = progressBar.dataset.progress + "%";
      progressBar.querySelector(".st-progressbar-in").style.width =
        progressPercentage;
    });
  }

  return (
    <section className="st-dark-bg" id="my-skill">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">MY SKILLS</h4>
          <h2 className="st-section-heading-subtitle">MY SKILLS</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="st-skill-wrap">
              <div className="st-skill-heading">
                <h2 className="st-skill-title">
                  All the skills that I have in that field of work are
                  mentioned.
                </h2>
                <div className="st-skill-subtitle">
                  It indicates that they do not believe there are any additional
                  skills that need to be mentioned since they have already been
                  covered. <br />
                  <br />
                  It can also suggest that the person is self-aware and knows
                  their strengths and weaknesses, and is able to communicate
                  effectively about their skills to potential employers or
                  colleagues.
                </div>
              </div>
              {/* <!-- .st-skill-heading --> */}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b30"></div>
            <div className="st-progressbar-wrap">
              {skills.map((skill, index) => (
                <div className="st-single-progressbar mb-4" key={index}>
                  <div className="st-progressbar-heading">
                    <h3 className="st-progressbar-title">{skill.title}</h3>
                    <div
                      className="st-progressbar-percentage wow fadeInLeft"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.5s"
                    >
                      {skill.percentage}%
                    </div>
                  </div>
                  <div
                    className="st-progressbar"
                    data-progress={skill.percentage}
                  >
                    <div className="st-progressbar-in wow fadeInLeft"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
