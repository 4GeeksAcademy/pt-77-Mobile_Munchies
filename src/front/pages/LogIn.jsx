import React from 'react';
import { Link } from 'react-router-dom';

const preventRefresh = (e) => {
	e.preventDefault();
};

export const LogIn = () => {
	return (
		<div className="wrapper signIn">
			<div className="form">
				<div className="heading">LOGIN</div>
				<form>
					<div>
						<label htmlFor="email">E-Mail Address:</label>
						<input type="email" id="email" placeholder="Enter your E-Mail" />
					</div>
					<div>
						<label htmlFor="password">Password:</label>
						<input type="password" id="password" placeholder="Enter password" />
					</div>
					<button type="submit" onClick={preventRefresh}>
						Submit
					</button>
				</form>
				<p>
					Don't have an account ? <Link to="/signup"> Sign Up </Link>
				</p>
			</div>
		</div>
	);
}