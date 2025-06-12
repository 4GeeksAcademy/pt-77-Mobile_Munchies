import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const CustomersignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    alert(data.message);
    if (res.ok) {
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  const toggleVisibility = (setter) => {
    setter((prev) => !prev);
  };

  return (
    <div className="wrapper signUp">
      <form onSubmit={handleSignup} className="form">
        <div className="heading text-white">CREATE CUSTOMER ACCOUNT</div>
        <div>
          <label className="text-white" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="text-white" htmlFor="email">
            E-Mail:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ position: "relative" }}>
          <label className="text-white" htmlF or="password">
            Create Password:
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i
            className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
            onClick={() => toggleVisibility(setShowPassword)}
          ></i>
        </div>
        <button type="Submit">SIGN UP</button>
        {message && <p>{message}</p>}
        <h2 align="center" className="or text-white">
          OR
        </h2>
        <p className="text-white">
          Have an account ? <Link to={"/login"}> Login </Link>
        </p>
      </form>
    </div>
  );
};
