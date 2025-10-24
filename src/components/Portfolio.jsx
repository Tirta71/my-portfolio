import React, { useEffect, useMemo, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./css/portfolio.css";

export default function Portfolio({ portfolios = [] }) {
  const [visibleItems, setVisibleItems] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Normalisasi teks kategori (tahan spasi & case)
  const norm = (v) => (v ?? "").toString().trim().toLowerCase();

  // Ambil semua kategori unik (support: string "A, B" atau array ["A","B"])
  const categories = useMemo(() => {
    const all = portfolios
      .map((p) => {
        if (Array.isArray(p.category)) return p.category.map(norm);
        if (typeof p.category === "string")
          return p.category.split(",").map(norm);
        return [];
      })
      .flat()
      .filter(Boolean);

    const unique = Array.from(new Set(all)).map(
      (c) => c.charAt(0).toUpperCase() + c.slice(1)
    );

    return ["All", ...unique];
  }, [portfolios]);

  // Filter portofolio berdasarkan kategori terpilih
  const filteredPortfolios = useMemo(() => {
    if (selectedCategory === "All") return portfolios;

    const target = norm(selectedCategory);
    return portfolios.filter((p) => {
      const cands = Array.isArray(p.category)
        ? p.category.map(norm)
        : typeof p.category === "string"
        ? p.category.split(",").map(norm)
        : [];
      return cands.includes(target);
    });
  }, [portfolios, selectedCategory]);

  const isViewMoreVisible = filteredPortfolios.length > visibleItems;

  // AOS
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  useEffect(() => {
    Aos.refresh();
  }, [visibleItems, selectedCategory]);

  const showMoreItems = () => setVisibleItems((n) => n + 3);

  const buttonStyle = {
    backgroundColor: isHovered ? "#f5bd1f" : "#fec544",
    color: "black",
    padding: "0.5rem 2rem",
    borderRadius: "20px",
    transition: "all 0.3s ease",
    transform: isHovered ? "scale(1.03)" : "scale(1)",
  };

  return (
    <section id="portfolio" className="py-5">
      <div className="container">
        {/* Heading */}
        <div className="container" data-aos="fade-up">
          <div className="st-section-heading st-style1">
            <h4 className="st-section-heading-title">Portfolios</h4>
            <h2 className="st-section-heading-subtitle">Portfolios</h2>
          </div>
          <div className="st-height-b25 st-height-lg-b25"></div>
        </div>

        {/* Subtitle & Filter */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="font-weight-bold">Past Project Experience</h2>
          <p>Explore the projects I've worked on so far</p>

          <div className="swiper-container mt-3">
            <Swiper
              spaceBetween={10}
              slidesPerView="auto"
              freeMode
              pagination={{ clickable: true }}
              className="swiper-categories"
            >
              {categories.map((category) => (
                <SwiperSlide key={category} className="swiper-slide">
                  <button
                    type="button"
                    className={`cat-btn ${
                      selectedCategory === category ? "active-category" : ""
                    }`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setVisibleItems(3); // reset saat ganti kategori
                    }}
                  >
                    {category}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Grid Cards */}
        <div className="row">
          {filteredPortfolios.slice(0, visibleItems).map((p, idx) => (
            <div
              className="col-lg-4 col-md-6 mb-4"
              key={p.id ?? `${p.title}-${idx}`}
              data-aos="fade-up"
              data-aos-delay={`${idx * 100}`}
            >
              <div className="card h-100 border-0 shadow custom-card">
                <a
                  href={p.LinkProject}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="card-img-top custom-card-img"
                    style={{ backgroundImage: `url(${p.image})` }}
                  />
                </a>

                <div className="card-body">
                  <h5 className="card-title text-center">
                    <a
                      href={p.LinkProject}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {p.title}
                    </a>
                  </h5>
                  <p className="card-text">{p.description}</p>
                  <p className="card-tech">{p.tech}</p>
                </div>

                <div className="card-footer text-center">
                  {p.LinkProject && (
                    <a
                      href={p.LinkProject}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Project"
                    >
                      <i className="fas fa-external-link-alt" />
                    </a>
                  )}
                  {p.repoLink && (
                    <a
                      href={p.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Repository"
                    >
                      <i className="fas fa-code" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        {isViewMoreVisible && (
          <div className="text-center mt-4">
            <button
              style={buttonStyle}
              onClick={showMoreItems}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
