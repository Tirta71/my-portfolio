import React from "react";

export default function About() {
  return (
    <section id="about" class="st-about-wrap">
      <div class="st-height-b100 st-height-lg-b80"></div>
      <div class="container">
        <div class="st-section-heading st-style1">
          <h4 class="st-section-heading-title">ABOUT ME</h4>
          <h2 class="st-section-heading-subtitle">ABOUT ME</h2>
        </div>
        <div class="st-height-b25 st-height-lg-b25"></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 wow fadeInLeft">
            <div class="st-about-img-wrap">
              <div class="st-about-img st-dynamic-bg st-bg">
                <img
                  src="assets/img/tirta.jpg"
                  alt="tirta.jpg"
                  style={{
                    height: "500px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div class="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div class="col-lg-6">
            <div class="st-vertical-middle">
              <div class="st-vertical-middle-in">
                <div class="st-text-block st-style1">
                  <h2 class="st-text-block-title">
                    Hi There! I'm Tirta Samara
                  </h2>
                  <h4 class="st-text-block-subtitle">Web Developer</h4>
                  <div class="st-text-block-text">
                    <p>
                      As a web developer, I have a strong background in
                      designing and developing websites and web applications. I
                      am proficient in programming languages such as HTML, CSS,
                      and JavaScript, and have experience using frameworks and
                      tools such as React, Vue.js, or Angular.
                    </p>
                  </div>
                  <ul class="st-text-block-details st-mp0">
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
                  <div class="st-text-block-btn">
                    <a
                      href="uploads/CV_TIRTASAMARA.pdf"
                      class="st-btn st-style1 st-color1"
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
