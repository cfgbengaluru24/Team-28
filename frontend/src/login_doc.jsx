import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; 
import axios from "axios"; // Import axios
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./login.css";
import logo from "./images/logo.png";

const Login = () => {
  // State for email, password, and password visibility
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const api = axios.create({withCredentials: true})
  // Handle login button click
  const handleLoginClick = async () => {
    try {
      const response = await api.post("http://localhost:8100/api/doctor/login", {
        email,
        password
      });
      if (response.status === 200) {
        //alert("Login successful");
        // Handle successful login (e.g., redirect or store token)
        navigate("/myprofile");
      }
    } catch (error) {
      // Check if error.response exists
      if (error.response) {
        alert("Login failed: " + error.response.data.message);
      } else {
        alert("Login failed: " + error.message);
      }
    }
  };
  

  return (
    <div className="login-main">
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <FaEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div>
              </div>
              <div className="login-center-buttons">
                <button type="button" onClick={handleLoginClick}>
                  Log In
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <Link to="/Signup_doc">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
