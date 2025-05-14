import { Link } from "react-router-dom";


export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="rating">
			<Link to="/components/RatingPage">
			<button type="button" class="btn btn-danger">Ratings</button>
			</Link>
		</div>
		<div className="merch">
			<Link to="/components/Merch">
			<button type="button" class="btn btn-danger">Merch</button>
			</Link>
		</div>
	</footer>
);
