import React from "react";

export default function Portfolio({ portfolios }) {
  return (
    <section id="portfolio">
      <div class="st-height-b100 st-height-lg-b80 "></div>
      <div class="st-section-heading st-style1 ">
        <h4 class="st-section-heading-title">PORTFOLIOS</h4>
        <h2 class="st-section-heading-subtitle">PORTFOLIOS</h2>
      </div>
      <div class="container" style={{ marginTop: "5rem" }}>
        <div class="row">
          {portfolios.map((portfolio) => (
            <div class="col-lg-4 col-md-6" key={portfolio.id}>
              <div class="st-portfolio-single st-style1 st-lightgallery">
                <div class="st-portfolio-item">
                  <a
                    href={portfolio.LinkProject}
                    class="st-portfolio st-zoom st-lightbox-item"
                  >
                    <div
                      class="st-portfolio-img st-zoom-in"
                      style={{ width: "370px", height: "300px" }}
                    >
                      <img src={portfolio.image} alt="portfolio" />
                    </div>
                    <div class="st-portfolio-item-hover">
                      <i class="fas fa-plus-circle"></i>
                      <h5>{portfolio.title}</h5>
                      <p>{portfolio.category}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
