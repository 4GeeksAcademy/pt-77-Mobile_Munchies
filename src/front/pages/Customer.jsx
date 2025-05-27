import React, { useState } from "react";
import { Link } from "react-router-dom";

export const CustomersignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = async (e) => {
  e.preventDefault();

  const res = await fetch('https://miniature-zebra-g4rrw6gx4xw6c9j7r-3001.app.github.dev/api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  alert(data.message);
  };
  

  const toggleVisibility = (setter) => {
    setter((prev) => !prev);
  };


  return (
    <div className="wrapper signUp">
      <form onSubmit={handleSignup} className="form">
        <div className="heading">CREATE CUSTOMER ACCOUNT</div>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" 
            id="name" 
            placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="email">E-Mail:</label>
            <input type="email" 
            id="email" 
            placeholder="Enter your E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ position: "relative" }}>
            <label htmlFor="password">Create Password:</label>
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
          <h2 align="center" className="or">
            OR
          </h2>
        <p>
          Have an account ? <Link to={"/login"}> Login </Link>
        </p>
      </form>
    </div>
  );
}