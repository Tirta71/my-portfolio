import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import AOS from "aos";
import "aos/dist/aos.css";
import { certificates } from "../Data/dataCertifcate";

Modal.setAppElement("#root");

const Certificate = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 2000, // durasi animasi dalam milidetik
    });
  }, []);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage("");
  };

  const sortedCertificates = certificates.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB - dateA;
  });

  return (
    <section
      id="certificate"
      style={{ backgroundColor: "#0e101a", color: "#fff", padding: "50px 0" }}
    >
      <div className="container" data-aos="fade-up">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Certificates</h4>
          <h2 className="st-section-heading-subtitle">CERTIFICATES</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {sortedCertificates.map((cert, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100} // Apply increasing delay for each card
            style={{
              backgroundColor: "#1b1e2b",
              borderRadius: "10px",
              padding: "20px",
              width: "300px",
              textAlign: "center",
            }}
          >
            <img
              src={cert.imageUrl}
              alt={cert.title}
              style={{
                width: "100%",
                borderRadius: "10px",
                height: "200px",
                cursor: "pointer",
                objectFit: "cover",
              }}
              onClick={() => openModal(cert.imageUrl)}
            />
            <h3
              style={{
                color: "#e0c08a",
                margin: "15px 0 5px 0",
                fontSize: "20px",
              }}
            >
              {cert.title}
            </h3>
            <p style={{ fontSize: "0.9em", margin: 0 }}>{cert.description}</p>
            <p
              style={{
                fontSize: "0.8em",
                margin: "10px 0 0 0",
                color: "#a0a0a0",
              }}
            >
              {cert.date}
            </p>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Certificate Image"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#1b1e2b",
            border: "none",
            borderRadius: "10px",
            padding: "20px",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
        }}
      >
        <img
          src={selectedImage}
          alt="Certificate"
          style={{ width: "100%", borderRadius: "10px" }}
        />
      </Modal>
    </section>
  );
};

export default Certificate;
