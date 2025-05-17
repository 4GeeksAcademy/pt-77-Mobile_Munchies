import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				<div className="ml-auto">
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