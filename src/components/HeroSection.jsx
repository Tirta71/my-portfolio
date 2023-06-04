import React from "react";

export default function HeroSection() {
  return (
    <section class="st-hero-wrap st-parallax">
      <div class="st-height-b80 st-height-lg-b80"></div>
      <div class="st-hero st-style1 st-ripple-version">
        <div class="container">
          <div class="st-hero-text">
            <h3>Hello, I’m</h3>
            <h1>
              Tirta <br />
              Samara
            </h1>
            <h2>Front end Web Developer</h2>
            <div class="st-hero-btn">
              <a
                href="mailto:tirta@gmail.com"
                class="st-btn st-style1 st-color1 st-smooth-move"
              >
                Hire me
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Hero Image - Social Link Group --> */}
      <div class="st-hero-img st-to-right">
        <img class="wow fadeInRight" src="assets/img/hero-img.jpg" alt="Hero" />
        <div class="st-social-group wow fadeInLeft">
          <div class="st-social-link">
            <a
              href="https://www.instagram.com/tirtajasi/"
              class="st-social-btn active"
            >
              <span class="st-social-icon">
                <i class="fab fa-instagram"></i>
              </span>
              <span class="st-icon-name">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100068785599390"
              class="st-social-btn"
            >
              <span class="st-social-icon">
                <i class="fab fa-facebook"></i>
              </span>
              <span class="st-icon-name">Facebook</span>
            </a>
            <a href="https://twitter.com/tieerta" class="st-social-btn">
              <span class="st-social-icon">
                <i class="fab fa-twitter"></i>
              </span>
              <span class="st-icon-name">Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/tirta-samara-b84a48275/"
              class="st-social-btn"
            >
              <span class="st-social-icon">
                <i class="fab fa-linkedin"></i>
              </span>
              <span class="st-icon-name">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      <div id="particles-js"></div>
    </section>
  );
}
