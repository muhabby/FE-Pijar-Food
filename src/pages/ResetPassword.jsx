/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

const ResetPassword = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="reset-password">
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
            Enter your new password!
          </p>
          <div className="box" style={{ width: 50, backgroundColor: "grey" }} />
          <hr style={{ width: 390, color: "#efc81a" }} />
        </div>

        {/* Form Input */}
        <form className="container col-4">
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter new password"
              style={{ padding: 10, fontSize: 13 }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirm-password" className="form-label">
              Confirm Password
            </label>
            <input
              type="text"
              className="form-control"
              id="confirm-password"
              placeholder="Enter confirm password"
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
      </div>
    </>
  );
};

export default ResetPassword;
