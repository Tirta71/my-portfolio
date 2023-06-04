import React, { useEffect } from "react";
import $ from "jquery";

export default function HeroSection() {
  useEffect(() => {
    function socialBtnHover() {
      $(".st-social-btn").hover(function () {
        $(this).addClass("active").siblings().removeClass("active");
      });
    }
    socialBtnHover();
  }, []);

  return (
    <section className="st-hero-wrap st-parallax">
      <div className="st-height-b80 st-height-lg-b80"></div>
      <div className="st-hero st-style1 st-ripple-version">
        <div className="container">
          <div className="st-hero-text">
            <h3>Hello, I’m</h3>
            <h1>
              Tirta <br />
              Samara
            </h1>
            <h2>Front end Web Developer</h2>
            <div className="st-hero-btn">
              <a
                href="mailto:tirta@gmail.com"
                className="st-btn st-style1 st-color1 st-smooth-move"
              >
                Hire me
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Hero Image - Social Link Group --> */}
      <div className="st-hero-img st-to-right">
        <img
          className="wow fadeInRight"
          src="assets/img/hero-img.jpg"
          alt="Hero"
        />
        <div className="st-social-group wow fadeInLeft">
          <div className="st-social-link">
            <a
              href="https://www.instagram.com/tirtajasi/"
              className="st-social-btn active"
            >
              <span className="st-social-icon">
                <i className="fab fa-instagram"></i>
              </span>
              <span className="st-icon-name">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100068785599390"
              className="st-social-btn"
            >
              <span className="st-social-icon">
                <i className="fab fa-facebook"></i>
              </span>
              <span className="st-icon-name">Facebook</span>
            </a>
            <a href="https://twitter.com/tieerta" className="st-social-btn">
              <span className="st-social-icon">
                <i className="fab fa-twitter"></i>
              </span>
              <span className="st-icon-name">Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/tirta-samara-b84a48275/"
              className="st-social-btn"
            >
              <span className="st-social-icon">
                <i className="fab fa-linkedin"></i>
              </span>
              <span className="st-icon-name">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      <div id="particles-js"></div>
    </section>
  );
}
