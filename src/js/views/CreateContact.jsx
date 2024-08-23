import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const CreateContact = () => {
	const { actions } = useContext(Context);
	const navigate = useNavigate();

	const [contactData, setContactData] = useState({
		name: "",
		email: "",
		address: "",
		phone: ""
	});

	const handleChange = (e) => {
		setContactData({ ...contactData, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		actions.addContacts(contactData);
		navigate("/");
	}

	return (

		<div className="container">
			<form onSubmit={handleSubmit}>

				<h1 className="mt-3 text-center">New Contact</h1>
				<div className="mb-3">
					<label className="form-label">Full Name</label>
					<input type="text" className="form-control" id="name" placeholder="First Name Last Name" onChange={handleChange} required />
				</div>
				<div className="mb-3">
					<label className="form-label">Phone Number</label>
					<input type="text" className="form-control" id="phone" placeholder="Number" onChange={handleChange} required />
				</div>
				<div className="mb-3">
					<label className="form-label">Email</label>
					<input type="email" className="form-control" id="email" placeholder="johnsmith@gmail.com" onChange={handleChange} required />
				</div>
				<div className="mb-3">
					<label className="form-label">Address</label>
					<input type="text" className="form-control" id="address" placeholder="Address" onChange={handleChange} required />
				</div>
				<button type="submit" className="btn mb-3 btn-primary">Save</button>
			</form>
			<br />
			<Link to="/">
				Back to Contacts
			</Link>


		</div>
	);
};
