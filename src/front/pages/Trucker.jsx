import React from "react";
import { Link } from "react-router-dom";

const preventRefresh = (e) => {
	e.preventDefault();
};

export const TruckersignUp = () => {

  return (
    <div className="wrapper signUp">
      <div className="form">
        <div className="heading">CREATE A TRUCKER ACCOUNT</div>
        <form>
          <div>
            <label htmlFor="name">Buisness Name:</label>
            <input type="text" id="name" placeholder="Enter Buisness name" />
          </div>
          <div>
            <label htmlFor="email">E-Mail:</label>
            <input type="email" id="email" placeholder="Enter your E-Mail" />
          </div>
          <div>
            <label htmlFor="password">Create Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your new password"
            />
          </div>
          <button type="submit" onClick={preventRefresh}>Submit</button>
          <h2 align="center" className="or">
            OR
          </h2>
        </form>
        <p>
          Have an account ? <Link to={"/login"}> Login </Link>
        </p>
      </div>
    </div>
  );
}
export default TruckersignUp;