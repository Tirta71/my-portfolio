import React, { useState } from "react";

export default function Portfolio({ portfolios }) {
  const [visibleItems, setVisibleItems] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const totalItems = portfolios.length;

  const showMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };

  const isViewMoreVisible = visibleItems < totalItems;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    backgroundColor: isHovered ? "#f5bd1f" : "#fec544",
    padding: "0.5rem 2rem",
    borderRadius: "20px",
    transition: "all 0.3s ease",
    transform: isHovered ? "scale(1.03)" : "scale(1)",
  };

  return (
    <section id="portfolio">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="st-section-heading st-style1">
        <h4 className="st-section-heading-title">PORTFOLIOS</h4>
        <h2 className="st-section-heading-subtitle">PORTFOLIOS</h2>
      </div>
      <div className="container" style={{ marginTop: "5rem" }}>
        <div className="row">
          {portfolios.slice(0, visibleItems).map((portfolio) => (
            <div className="col-lg-4 col-md-6" key={portfolio.id}>
              <div className="st-portfolio-single st-style1 st-lightgallery">
                <div className="st-portfolio-item">
                  <a
                    href={portfolio.LinkProject}
                    className="st-portfolio st-zoom st-lightbox-item"
                  >
                    <div
                      className="st-portfolio-img st-zoom-in"
                      style={{ width: "370px", height: "300px" }}
                    >
                      <img src={portfolio.image} alt="portfolio" />
                    </div>
                    <div className="st-portfolio-item-hover">
                      <i className="fas fa-plus-circle"></i>
                      <h5>{portfolio.title}</h5>
                      <p>{portfolio.category}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {isViewMoreVisible && (
          <div className="text-center mt-4">
            <button
              style={buttonStyle}
              onClick={showMoreItems}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseOut}
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
