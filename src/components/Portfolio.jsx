import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import "./portfolio.css"; // custom CSS file

export default function Portfolio({ portfolios }) {
  const [visibleItems, setVisibleItems] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(portfolios.map((portfolio) => portfolio.category)),
  ];

  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [visibleItems]);

  const showMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };

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

  const filteredPortfolios =
    selectedCategory === "All"
      ? portfolios
      : portfolios.filter(
          (portfolio) => portfolio.category === selectedCategory
        );

  const isViewMoreVisible = filteredPortfolios.length > visibleItems;

  return (
    <section id="portfolio" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h4 className="text-uppercase">Portfolios</h4>
          <h2 className="font-weight-bold">Past Project Experience</h2>
          <p>Explore the projects I've worked on so far</p>
          <div className="btn-group mt-3" role="group">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`btn btn-outline-light ${
                  selectedCategory === category ? "active-category" : ""
                }`}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleItems(3); // Reset visible items to 3 when category changes
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          {filteredPortfolios.slice(0, visibleItems).map((portfolio, index) => (
            <div
              className="col-lg-4 col-md-6 mb-4"
              key={portfolio.id}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="card h-100 border-0 shadow custom-card">
                <a
                  href={portfolio.LinkProject}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="card-img-top custom-card-img"
                    style={{
                      backgroundImage: `url(${portfolio.image})`,
                    }}
                  ></div>
                </a>
                <div className="card-body">
                  <h5 className="card-title text-center">
                    <a
                      href={portfolio.LinkProject}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {portfolio.title}
                    </a>
                  </h5>
                  <p className="card-text">{portfolio.description}</p>
                  <p className="card-tech">{portfolio.tech}</p>
                </div>
                <div className="card-footer text-center">
                  <a
                    href={portfolio.LinkProject}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a
                    href={portfolio.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-code"></i>
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
