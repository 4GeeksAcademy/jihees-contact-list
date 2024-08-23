import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditCard = () => {

	const { actions, store } = useContext(Context);
	const navigate = useNavigate();
	const params = useParams();

	const [contact, setContact] = useState({
		name: "",
		address: "",
		phone: "",
		email: "",
	});

	useEffect(() => {
		const contactData = store.contactList.find(
			(c) => c.id === parseInt(params.id)
		);

		if (contactData) {
			setContact(contactData);
		}
	}, [params.id, store.contactList]);

	const handleChange = (e) => {
		setContact({ ...contact, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		actions.editContacts(params.id, contact);
		navigate("/");
	}

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>

				<h1 className="mt-3 text-center">Edit Contact</h1>
				<div className="mb-3">
					<label className="form-label">Full Name</label>
					<input type="text" className="form-control" id="name" placeholder="First Name Last Name" onChange={handleChange} required value={contact.name}/>
				</div>
				<div className="mb-3">
					<label className="form-label">Phone Number</label>
					<input type="text" className="form-control" id="phone" placeholder="Number" onChange={handleChange} required value={contact.phone}/>
				</div>
				<div className="mb-3">
					<label className="form-label">Email</label>
					<input type="email" className="form-control" id="email" placeholder="johnsmith@gmail.com" onChange={handleChange} required value={contact.email} />
				</div>
				<div className="mb-3">
					<label className="form-label">Address</label>
					<input type="text" className="form-control" id="address" placeholder="Address" onChange={handleChange} required value={contact.address}/>
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

export default EditCard;