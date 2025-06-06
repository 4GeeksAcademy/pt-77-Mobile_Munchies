import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const storedName = sessionStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);
  
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
    try {
      const resp = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/token", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (resp.status === 200) {
        const data = await resp.json();
        sessionStorage.setItem("token", data.access_token);
        if (data.user && data.user.name) {
        sessionStorage.setItem("userName", data.user.name);
        setUserName(data.user.name);
        } else if (data.vendor && data.vendor.title) {
        sessionStorage.setItem("userName", data.vendor.title);
        setUserName(data.vendor.title);
      }
      navigate("/");
      } else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="wrapper signIn">
      <div className="form">
        <div className="heading">LOGIN</div>

        {(token && userName) ? (
          <p>Welcome, {userName}!</p>
        ) : (
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
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">LOGIN</button>
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
