import { Link, useNavigate, NavLink } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate();
	const isLoggedIn = sessionStorage.getItem("token") !== null;

	const handleLogout = () => {
		sessionStorage.removeItem("token");
		navigate("/login");
	};

	return (
		<nav className="navbar navbar-light bg-light"
		>
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
					<img className="logo" src="https://images.deepai.org/chat-style-image/0459cd1bb41d4e18b3774762886eeac8/output.jpg"/>
					</span>
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				<h1>
					MOBILE MUNCHIES
				</h1>
				
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
					<div className="merch">
			<Link to="/components/Merch">
			<button type="button" class="btn btn-danger">Merch</button>
			</Link>
		</div>
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action\</button>
					</Link>
					<Link to="/googlemaptest">
						<button className="btn btn-primary">Google Maps</button>
					</Link>
					<Link to="/calendlypages">
						<button className="btn btn-primary">Calendly Pages</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};