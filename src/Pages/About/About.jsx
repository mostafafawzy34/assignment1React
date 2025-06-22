import React from "react";

function About() {
  return (
    <div className="text-white text-center" style={{ backgroundColor: "#f8f9fa" }}>

      <div
        className="home-wrapper min-vh-100 d-flex justify-content-center align-items-center"
        style={{ padding: "2rem" }}
      >
        <div className="home-content container">
          <h1 className="fw-bold text-center">ABOUT COMPONENT</h1>

          <div className="home-divider my-3 d-flex align-items-center justify-content-center">
            <div className="line"></div>
            <div className="star mx-3">★</div>
            <div className="line"></div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-5 text-start">
              <p className="fs-5">
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </p>
            </div>
            <div className="col-md-5 text-start">
              <p className="fs-5">
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </p>
            </div>
          </div>
        </div>
      </div>


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
                <a
                  href="#"
                  className="text-white"
                  style={{ fontSize: "1.5rem" }}
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-white"
                  style={{ fontSize: "1.5rem" }}
                  aria-label="Twitter"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-white"
                  style={{ fontSize: "1.5rem" }}
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  className="text-white"
                  style={{ fontSize: "1.5rem" }}
                  aria-label="Website"
                >
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

export default About;
