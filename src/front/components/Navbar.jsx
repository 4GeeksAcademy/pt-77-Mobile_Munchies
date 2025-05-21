import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light"
		>
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
					<img className="logo" src="https://images.deepai.org/chat-style-image/0459cd1bb41d4e18b3774762886eeac8/output.jpg"/>
					</span>
				</Link>
				<h1>
					MOBILE MUNCHIES
				</h1>
				
				<div className="ml-auto">
					<div className="merch">
			<Link to="/components/Merch">
			<button type="button" class="btn btn-danger">Merch</button>
			</Link>
		</div>
				</div>
			</div>
		</nav>
	);
};