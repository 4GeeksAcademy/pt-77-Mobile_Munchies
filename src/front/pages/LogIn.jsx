import React, { useState } from "react";
import { Link } from 'react-router-dom';

export const LogIn = () => {

	const [showPassword, setShowPassword] = useState(false);

	const preventRefresh = (e) => {
		e.preventDefault();
	};

	const toggleVisibility = (setter) => {
		setter((prev) => !prev);
	};
	return (
		<div className="wrapper signIn">
			<div className="form">
				<div className="heading">LOGIN</div>
				<form>
					<div>
						<label htmlFor="email">E-Mail Address:</label>
						<input type="email" id="email" placeholder="Enter your E-Mail" />
					</div>
					<div style={{ position: "relative" }}>
						<label htmlFor="password">Password:</label>
						<input  type={showPassword ? "text" : "password"} id="password" placeholder="Enter password" />
						<i
							className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
							onClick={() => toggleVisibility(setShowPassword)}
						></i>
					</div>
					<button type="Submit" onClick={preventRefresh}>
						LOGIN
					</button>
				</form>
				<p>
					Don't have an account ? <Link to="/signup"> Sign Up </Link>
				</p>
			</div>
		</div>
	);
}