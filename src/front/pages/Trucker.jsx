import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const TruckersignUp = () => {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState("");
  const [is_active, setIs_active] = useState(true);
  const [calendly_url, setCalendly_url] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/vendor/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          email,
          password,
          address,
          price: parseInt(price),
          picture,
          is_active,
          calendly_url,
        }),
      }
    );

    const data = await res.json();
    alert(data.message);
    if (res.ok) {setTimeout(() => {
      navigate("/login");
    }, 1000);
    }
  };

  const toggleVisibility = (setter) => {
    setter((prev) => !prev);
  };

  return (
    <div className="wrapper signUp">
      <form onSubmit={(e) => handleSignup(e)} className="form">
        <div className="heading">CREATE A TRUCKER ACCOUNT</div>
        <div>
          <label>Business Title:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your Buisness Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>E-Mail:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ position: "relative" }}>
          <label>Create Password:</label>
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
        <div>
          <label>Address:</label>
          <input
            type="text"
            id="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Price to Book:</label>
          <input
            type="number"
            id="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label>Picture:</label>
          <input
            type="text"
            id="picture"
            placeholder="Picture"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />
        </div>
        <div>
          <label>Calendly_url:</label>
          <input
            type="text"
            id="calendly_url"
            placeholder="Calendly_url"
            value={calendly_url}
            onChange={(e) => setCalendly_url(e.target.value)}
          />
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
};
