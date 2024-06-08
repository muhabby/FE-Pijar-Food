/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const InputOTP = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="input-otp">
        {/* content */}
        <div
          className="container d-flex flex-column align-items-center"
          style={{ paddingTop: 80, paddingBottom: 20, color: "#efc81a" }}
        >
          <p style={{ fontSize: 25, fontWeight: 600 }}>Recipe...</p>
          <p style={{ fontSize: 25, fontWeight: 600, marginTop: 60 }}>
            Forgot Password
          </p>
          <p style={{ color: "#8692a6", marginTop: 5, fontSize: 15 }}>
            Enter the OTP that was sent to your email!
          </p>
          <div className="box" style={{ width: 50, backgroundColor: "grey" }} />
          <hr style={{ width: 390, color: "#efc81a" }} />
        </div>

        {/* Form Input */}
        <form className="container col-4">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email address"
              style={{ padding: 10, fontSize: 13 }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="otp" className="form-label">
              OTP
            </label>
            <input
              type="text"
              className="form-control"
              id="otp"
              placeholder="Enter OTP"
              style={{ padding: 10, fontSize: 13 }}
            />
          </div>
          <button
            type="submit"
            className="btn col-12 mt-3 btn-lg text-white"
            style={{ fontSize: 15, backgroundColor: "#efc81a" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#ceac18")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#EFC81A")
            }
          >
            Submit
          </button>
        </form>

        {/* Back to request otp */}
        <p
          className="container col-4 mt-4"
          style={{ fontSize: 13, color: "grey" }}
        >
          Haven't received the OTP?{"\u00A0\u00A0"}
          <Link
            to="/request-otp"
            className="text-warning"
            style={{ textDecoration: "none", color: "#EFC81A" }}
          >
            Request here
          </Link>
        </p>
      </div>
    </>
  );
};

export default InputOTP;
