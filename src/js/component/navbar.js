import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light px-3 mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>
			<div className="ml-auto">
				<Link to="/create-contact">
					<button className="btn btn-primary">Add a Contact</button>
				</Link>
			</div>
		</nav>
	);
};
