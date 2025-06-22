import React from "react";
import "./Home.css";
import avatarImage from "../../assets/images/avataaars.svg";

function Home() {
  return (
    <div>
      {/* Home Wrapper */}
      <div className="home-wrapper text-white text-center d-flex flex-column min-vh-100">
        {/* Home Content */}
        <div 
          className="home-content container d-flex flex-column justify-content-center align-items-center flex-grow-1 py-5" 
          style={{ minHeight: "80vh" }}
        >
          <img
            src={avatarImage}
            alt="avatar"
            className="home-avatar mb-5"
            style={{ width: "250px", height: "250px" }}
          />
          <h1 className="fw-bold display-4">START FRAMEWORK</h1>
          <div className="home-divider my-3 d-flex align-items-center justify-content-center">
            <div className="line bg-white" style={{ width: "50px", height: "2px" }}></div>
            <div className="star mx-3 fs-4">★</div>
            <div className="line bg-white" style={{ width: "50px", height: "2px" }}></div>
          </div>
          <p className="fs-5">Graphic Artist – Web Designer – Illustrator</p>
        </div>
      </div>

      {/* Footer */}
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

export default Home;
