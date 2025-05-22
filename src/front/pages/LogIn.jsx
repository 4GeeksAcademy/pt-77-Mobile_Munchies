import React, { useState } from "react";
import { Link } from 'react-router-dom';

export const LogIn = () => {

	const [showPassword, setShowPassword] = useState(false);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const preventRefresh = (e) => {
		e.preventDefault();
	};
	const toggleVisibility = (setter) => {
		setter((prev) => !prev);
	};

	const handleCLick = () => {
		const opts = {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				"email":email,
				"password": password
			})
		}
		fetch('https://miniature-zebra-g4rrw6gx4xw6c9j7r-3001.app.github.dev/api/token', opts)
			.then(resp => {
				if(resp.status === 200) return resp.json();
				else alert("There has been some error")
			})
			.then(data =>{
				
			})
			.catch(error => {
				console.error("There was an error!", error);
			})

	}


	return (
		<div className="wrapper signIn">
			<div className="form">
				<div className="heading">LOGIN</div>
				<form>
					<div>
						<label htmlFor="email">E-Mail Address:</label>
						<input type="email" id="email" placeholder="Enter your E-Mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
					</div>
					<div style={{ position: "relative" }}>
						<label htmlFor="password">Password:</label>
						<input  type={showPassword ? "text" : "password"} id="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} value={password}/>
						<i
							className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
							onClick={() => toggleVisibility(setShowPassword)}
						></i>
					</div>
					<button onClick={handleCLick}>
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