import React, { useState, useEffect } from "react";

export default function HeaderKu() {
  const [activeLink, setActiveLink] = useState("home");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < bottom) {
        setActiveLink(id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="st-site-header st-style1 st-sticky-header">
      <div className="st-main-header">
        <div className="container">
          <div className="st-main-header-in">
            <div className="st-main-header-left"></div>
            <div className="st-main-header-right">
              <nav className="st-nav">
                <ul className="st-nav-list st-onepage-nav">
                  <li>
                    <a
                      href="#home"
                      className={`st-smooth-move ${
                        activeLink === "home" ? "active" : ""
                      }`}
                      onClick={() => handleClick("home")}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className={`st-smooth-move ${
                        activeLink === "about" ? "active" : ""
                      }`}
                      onClick={() => handleClick("about")}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#my-skill"
                      className={`st-smooth-move ${
                        activeLink === "my-skill" ? "active" : ""
                      }`}
                      onClick={() => handleClick("my-skill")}
                    >
                      My Skill
                    </a>
                  </li>
                  <li>
                    <a
                      href="#resume"
                      className={`st-smooth-move ${
                        activeLink === "resume" ? "active" : ""
                      }`}
                      onClick={() => handleClick("resume")}
                    >
                      Resume
                    </a>
                  </li>
                  <li>
                    <a
                      href="#certificate"
                      className={`st-smooth-move ${
                        activeLink === "certificate" ? "active" : ""
                      }`}
                      onClick={() => handleClick("certificate")}
                    >
                      Certificate
                    </a>
                  </li>
                  <li>
                    <a
                      href="#portfolio"
                      className={`st-smooth-move ${
                        activeLink === "portfolio" ? "active" : ""
                      }`}
                      onClick={() => handleClick("portfolio")}
                    >
                      Portfolio
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
