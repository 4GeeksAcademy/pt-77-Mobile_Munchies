import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate();
	const isLoggedIn = sessionStorage.getItem("token") !== null;

	const handleLogout = () => {
		sessionStorage.removeItem("token");
		navigate("/login");
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{!isLoggedIn && (
						<>
							<Link className="btn btn-primary login me-2" to="/login">
								Login
							</Link>
							<Link className="btn btn-primary signup me-2" to="/signup">
								Signup
							</Link>
						</>
					)}
					{isLoggedIn && (
						<button className="btn btn-danger" onClick={handleLogout}>
							Log Out
						</button>
					)}
				</div>
			</div>
		</nav>
	);
};