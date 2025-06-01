import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer, { vendorSignIn } from "../hooks/useGlobalReducer";

export const VendorSignIn = () => {
  const { dispatch, store } = useGlobalReducer();
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleVisibility = (setter) => {
    setter((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    const result = await vendorSignIn(dispatch, email, password);

    if (result.success) {
      navigate("/vendor-dashboard");
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="wrapper signIn">
      <div className="form">
        <div className="heading">LOGIN</div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">E-Mail Address:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ position: "relative" }}>
            <label htmlFor="password">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
              onClick={() => toggleVisibility(setShowPassword)}
            ></i>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">LOGIN</button>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
