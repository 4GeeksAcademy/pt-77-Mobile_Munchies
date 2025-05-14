import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
					<img className="logo" src="https://images.deepai.org/chat-style-image/0459cd1bb41d4e18b3774762886eeac8/output.jpg"/>
					</span>
				</Link>
				
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-danger m-2">Sign in</button>
						<button className="btn btn-danger">Sign up</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};