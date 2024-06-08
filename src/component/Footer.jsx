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
          {/* <p style={{ fontSize: 25, fontWeight: 600 }}>PIJAR FOOD</p> */}
          <p style={{ fontSize: 55, fontWeight: 500 }}>Eat, Cook, Repeat</p>
          <p className="mt-2" style={{ color: "#707070", fontSize: 22.5 }}>
            Share your best recipe by uploading here!
          </p>
        </div>
        {/* <div
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
        </div> */}
        <div
          className="d-flex flex-row justify-content-between align-items-center"
          style={{
            paddingBottom: 50,
            paddingRight: 100,
            paddingLeft: 100,
          }}
        >
          <p>© Pijar Camp 2024</p>
          <p className="">
            Developed by{"  "}
            <a
              href="https://github.com/muhabby" target="_blank"
              style={{ color: "black", textDecoration: "none", fontFamily: 'monospace' }}
            >
              Muhabby Mulya
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
