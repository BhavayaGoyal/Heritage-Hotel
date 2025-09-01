import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope, FaLock, FaGoogle, FaFacebookF } from "react-icons/fa";
import Header from "./Header";
import {Link} from "react-router-dom"

function LoginPage() {
  return (
    <>
    <Header/>
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('/hero1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Poppins', sans-serif",
        
      }}
    >
      <div
        className="p-5 shadow rounded"
        style={{
          width: "100%",
          maxWidth: "500px", 
          backgroundColor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
          border:"1px solid rgba(255, 255, 255, 0.3",
          marginTop: "55px"
        }}
      >
        {/* Title */}
        <h3 className="text-center mb-2" style={{ color: "#4a3c31", fontFamily: "'Playfair Display', serif" }}>
          Welcome Back to
        </h3>
        <h2
          className="text-center mb-3"
          style={{ fontWeight: "700", color: "#4a3c31" }}
        >
          HERITAGE HOTEL
        </h2>
        <p className="text-center text-muted mb-4">
          Access your bookings and exclusive services.
        </p>

        {/* Form */}
        <form>
          <div className="mb-3 input-group">
            <span className="input-group-text bg-white border-0 shadow-sm">
              <FaEnvelope color="#a78b71" />
            </span>
            <input
              type="email"
              className="form-control shadow-sm"
              placeholder="Email / Username"
              required
            />
          </div>

          <div className="mb-3 input-group ">
            <span className="input-group-text bg-white border-0 shadow-sm">
              <FaLock color="#a78b71" />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="••••••••"
              required
            />
          </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe" className="ms-2 small">
                Remember Me
              </label>
            </div>
            <a href="/forgot-password" className="small text-decoration-none">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="btn w-100 mb-3"
            style={{
              backgroundColor: "#d87a3c",
              color: "#fff",
              fontWeight: "500",
              borderRadius: "8px",
              transition:"0.3s"
            }}
          >
            Log In
          </button>
        </form>
       

        {/* Social logins */}
        <div className="d-flex justify-content-center gap-3 mb-3">
          <button
            className="btn btn-light border d-flex align-items-center justify-content-center shadow-sm"
            style={{ width: "50px", height: "50px", borderRadius: "50%" ,transition: "0.3s", marginTop:"10px"}}
          >
            <FaGoogle size={20} color="#DB4437" />
          </button>
          <button
            className="btn btn-light border d-flex align-items-center justify-content-center shadow-sm"
            style={{ width: "50px", height: "50px", borderRadius: "50%",transition: "0.3s", marginTop:"10px" }}
          >
            <FaFacebookF size={20} color="#4267B2" />
          </button>
        </div>

        {/* Links */}
        <div className="text-center">
            <Link to="/signup" className="text-decoration-none fw-bold">
        Sign up as a new member
      </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default LoginPage;
