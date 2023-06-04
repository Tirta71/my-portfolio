import React from "react";

export default function HeaderKu() {
  return (
    <header class="st-site-header st-style1 st-sticky-header">
      <div class="st-main-header">
        <div class="container">
          <div class="st-main-header-in">
            <div class="st-main-header-left">
              <a class="st-site-branding" href="index.html">
                TIRTA
              </a>
            </div>
            <div class="st-main-header-right">
              <div class="st-nav">
                <ul class="st-nav-list st-onepage-nav">
                  <li>
                    <a href="#home" class="st-smooth-move">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" class="st-smooth-move">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#my-skill" class="st-smooth-move">
                      My Skill
                    </a>
                  </li>
                  <li>
                    <a href="#resume" class="st-smooth-move">
                      Resume
                    </a>
                  </li>
                  <li>
                    <a href="#portfolio" class="st-smooth-move">
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
