import React, { useState } from "react";
import { Link } from "react-router-dom";

export const TruckersignUp = () => {
  
  const [showPassword, setShowPassword] = useState(false);

  const preventRefresh = (e) => {
    e.preventDefault();
  };

  const toggleVisibility = (setter) => {
    setter((prev) => !prev);
  };

  return (
    <div className="wrapper signUp">
      <div className="form">
        <div className="heading">CREATE A TRUCKER ACCOUNT</div>
        <form onSubmit={preventRefresh}>
          <div>
            <label htmlFor="name">Business Name:</label>
            <input type="text" id="name" placeholder="Enter Business name" />
          </div>

          <div>
            <label htmlFor="email">E-Mail:</label>
            <input type="email" id="email" placeholder="Enter your E-Mail" />
          </div>

          <div style={{ position: "relative" }}>
            <label htmlFor="password">Create Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your new password"
            />
            <i
              className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
              onClick={() => toggleVisibility(setShowPassword)}
            ></i>
          </div>
          <button type="submit"  method="POST" onClick={preventRefresh}>SIGN UP</button>
          <h2 align="center" className="or">OR</h2>
        </form>
        <p>
          Have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default TruckersignUp;
