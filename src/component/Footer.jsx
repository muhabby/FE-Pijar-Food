/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <footer style={{ backgroundColor: "#EFC81A" }}>
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ padding: 75, paddingTop: 150 }}
        >
          <p style={{ fontSize: 55 }}>Eat, Cook, Repeat</p>
          <p className="mt-4" style={{ color: "#707070" }}>
            Share your best recipe by uploading here!
          </p>
        </div>
        <div
          className="d-flex flex-row justify-content-center text-align-center p-5"
          style={{ backgroundColor: "#EFC81A" }}
        >
          <a
            href=""
            style={{ padding: 10, textDecoration: "none", color: "#707070" }}
          >
            Product
          </a>
          <a
            href=""
            style={{ padding: 10, textDecoration: "none", color: "#707070" }}
          >
            Company
          </a>
          <a
            href=""
            style={{ padding: 10, textDecoration: "none", color: "#707070" }}
          >
            Learn more
          </a>
          <a
            href=""
            style={{ padding: 10, textDecoration: "none", color: "#707070" }}
          >
            Get in touch
          </a>
        </div>
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ paddingBottom: 30 }}
        >
          <p>© Pijar Camp</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
