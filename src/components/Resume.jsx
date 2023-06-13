import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
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
              <div className="st-resume-heading">
                <img src="assets/img/icon/resume-icon1.png" alt="resume-icon" />
                <h2 className="st-resume-heading-title">Experience</h2>
              </div>

              <div className="st-height-b50 st-height-lg-b30"></div>

              <div className="st-resume-timeline-wrap">
                <div className="st-resume-timeline">
                  <h3 className="st-resume-timeline-title">
                    Network technical
                  </h3>
                  <div className="st-resume-timeline-duration">
                    Jan 2019 - Jun 2019
                  </div>
                  <h4 className="st-resume-timeline-subtitle">
                    Indonesia, Diskominfo
                  </h4>
                  <div className="st-resume-timeline-text">
                    <p>
                      During my internship at Kominfo as a network technician, I
                      gained valuable hands-on experience in designing,
                      installing, and maintaining computer networks. I learned
                      how to troubleshoot various network issues and worked with
                      a team to ensure that all systems were up and running
                      smoothly.
                    </p>
                  </div>
                </div>
                {/* <!-- st-resume-timeline --> */}
                <div className="st-height-b50 st-height-lg-b30"></div>
                <div className="st-resume-timeline">
                  <h3 className="st-resume-timeline-title">Freelance</h3>
                  <div className="st-resume-timeline-duration">
                    2021 - until now
                  </div>
                  <h4 className="st-resume-timeline-subtitle">
                    Front End Web Development
                  </h4>
                  <div className="st-resume-timeline-text">
                    <p>
                      As a freelance front-end web developer, I specialize in
                      creating beautiful, functional, and responsive websites
                      for clients. I have expertise in HTML, CSS, JavaScript,
                      and various front-end frameworks such as React, Vue, and
                      Angular. I work closely with clients to understand their
                      needs and design websites that meet their goals and
                      expectations. I am committed to delivering high-quality
                      work and building long-term relationships with my clients.
                    </p>
                  </div>
                </div>
                {/* <!-- st-resume-timeline -->

            <!-- st-resume-timeline --> */}
              </div>
            </div>
          </div>
          {/* 
      <!-- Education --> */}
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b50"></div>
            <div className="st-resume-wrap">
              <div className="st-resume-heading">
                <img src="assets/img/icon/resume-icon2.png" alt="resume-icon" />
                <h2 className="st-resume-heading-title">Education</h2>
              </div>
              <div className="st-height-b50 st-height-lg-b30"></div>

              <div className="st-resume-timeline-wrap">
                {/* <!-- st-resume-timeline --> */}

                <div className="st-resume-timeline">
                  <h3 className="st-resume-timeline-title">
                    Vocational High School
                  </h3>
                  <div className="st-resume-timeline-duration">2017 - 2020</div>
                  <h4 className="st-resume-timeline-subtitle">SMKN 3 Bogor</h4>
                  <div className="st-resume-timeline-text">
                    <p>
                      I attended SMK Negeri 3 Bogor, a vocational high school
                      that focused on preparing students for a career in various
                      fields. The school provided a comprehensive curriculum
                      that included vocational skills, technical knowledge, and
                      general education
                    </p>
                  </div>
                </div>
                {/* <!-- st-resume-timeline --> */}
                <div className="st-height-b50 st-height-lg-b30"></div>
                <div className="st-resume-timeline">
                  <h3 className="st-resume-timeline-title">
                    An Undergraduate Degree in Computer Science
                  </h3>
                  <div className="st-resume-timeline-duration">
                    2021 - OnGoing
                  </div>
                  <h4 className="st-resume-timeline-subtitle">
                    Indonesian Computer University
                  </h4>
                  <div className="st-resume-timeline-text">
                    <p>
                      I am currently enrolled in Indonesian Computer University,
                      where I am pursuing my Bachelor's Degree in Computer
                      Science. The university is known for its excellent
                      programs in the field of computer science and technology,
                      providing students with a comprehensive education that
                      includes both theoretical and practical knowledge.
                    </p>
                  </div>
                </div>
                {/* <!-- st-resume-timeline --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
}
