import React from "react";

function Contact() {
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          minHeight: "100vh",
          width: "100vw",
          margin: 0,
          padding: "2rem",
          boxSizing: "border-box",
          backgroundColor: "#f8f9fa",
        }}
      >

        <div className="text-center mb-4">
          <h1 className="fw-bold">CONTACT SECTION</h1>
          <div
            className="d-flex justify-content-center align-items-center"
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
        </div>


        <form
          className="w-100"
          style={{
            maxWidth: "800px",
          }}
          action=""
          noValidate
        >
          <div className="mb-4">
            <input
              id="userName"
              type="text"
              placeholder="Username"
              className="form-control border-0 border-bottom py-3"
              style={{ fontSize: "1.1rem" }}
            />
          </div>

          <div className="mb-4">
            <input
              id="userAge"
              type="text"
              placeholder="User Age"
              className="form-control border-0 border-bottom py-3"
              style={{ fontSize: "1.1rem" }}
            />
          </div>

          <div className="mb-4">
            <input
              id="userEmail"
              type="email"
              placeholder="User Email"
              className="form-control border-0 border-bottom py-3"
              style={{ fontSize: "1.1rem" }}
            />
          </div>

          <div className="mb-4">
            <input
              id="userPassword"
              type="password"
              placeholder="User Password"
              className="form-control border-0 border-bottom py-3"
              style={{ fontSize: "1.1rem" }}
            />
          </div>

          <div className="d-flex justify-content-start">
            <button
              type="submit"
              className="btn text-white"
              style={{
                backgroundColor: "#1abc9c",
                border: "none",
              }}
            >
              Send Message
            </button>
          </div>
        </form>
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
    </>
  );
}

export default Contact;
