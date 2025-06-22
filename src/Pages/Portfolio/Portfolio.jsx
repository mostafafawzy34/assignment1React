import React, { useState } from "react";
import "./Portfolio.css";
import port1 from "../../assets/images/poert1.png";
import port2 from "../../assets/images/port2.png";
import port3 from "../../assets/images/port3.png";

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [port1, port2, port3, port1, port2, port3];

  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center min-vh-100"
        style={{
          padding: "4rem",
          boxSizing: "border-box",
        }}
      >
        <h1 className="fw-bold text-center">PORTFOLIO COMPONENT</h1>

        <div
          className="d-flex align-items-center justify-content-center mb-3"
          style={{ gap: "1rem" }}
        >
          <div
            style={{
              backgroundColor: "rgb(44, 62, 80)",
              width: "100px",
              height: "4px",
            }}
          ></div>
          <i className="fa-solid fa-star"></i>
          <div
            style={{
              backgroundColor: "rgb(44, 62, 80)",
              width: "100px",
              height: "4px",
            }}
          ></div>
        </div>

        <div className="row g-4" style={{ justifyContent: "center" }}>
          {images.map((src, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-md-4">
              <div className="position-relative overflow-hidden rounded bg-light shadow-sm">
                <img
                  src={src}
                  alt={`Portfolio ${idx}`}
                  className="img-fluid rounded"
                />
                <div
                  className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: "rgba(26, 188, 156, 0.7)",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedImage(src)}
                >
                  <span
                    className="display-3 fw-bold text-white"
                    style={{ fontSize: "5rem" }}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {selectedImage && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: 1050,
          }}
          onClick={() => setSelectedImage(null)} 
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            className="img-fluid rounded shadow"
            style={{
              maxHeight: "70%",
              maxWidth: "70%",
            }}
          />
        </div>
      )}


      <footer
        className="text-white"
        style={{
          width: "100%",
          backgroundColor: "#2c3e50",
        }}
      >
        <div className="container py-5">
          <div className="row text-center">
            <div className="col-12 col-md-4">
              <h3 className="fw-bold">LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-12 col-md-4">
              <h3 className="fw-bold">AROUND THE WEB</h3>
              <div className="d-flex justify-content-center gap-3 mt-3">
                <a href="#" className="text-white" style={{ fontSize: "1.5rem" }}>
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#" className="text-white" style={{ fontSize: "1.5rem" }}>
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#" className="text-white" style={{ fontSize: "1.5rem" }}>
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-white" style={{ fontSize: "1.5rem" }}>
                  <i className="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <h3 className="fw-bold">ABOUT FREELANCER</h3>
              <p>
                Freelance is a free-to-use, licensed Bootstrap theme created by Route.
              </p>
            </div>
          </div>
        </div>

        <div
          className="text-center py-3"
          style={{
            backgroundColor: "#1a252f",
          }}
        >
          <p className="mb-0">Copyright © Your Website 2021</p>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
