import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Card = ({ contact }) => {
    const {
        name,
        address,
        phone,
        email,
    } = contact;

    const { actions } = useContext(Context);

    const handleDelete = (e) => {
        e.preventDefault(); 
        const contactId = contact.id; // Assuming the contact object has an `id` property.
        actions.deleteContact(contactId); 
    }
    

    return (
        <div className=" card mx-auto p-2 d-flex flex-row mb-3 g-0" id="cardBody" style={{ minWidth: "700px" }}>
            <div className="col-3 d-flex align-items-center" style={{ minWidth: "50px" }}>
                <img src="" className="img-fluid rounded-start" alt="Contact Icon" />
            </div>
            <div className=" col-7 d-flex flex-column flex-row-1 mx-2">
                <div className="card-body align-items-center" id="cardContent">
                    <h3 className="card-title">{name}</h3>
                    <i className="fa-solid fa-location-dot"></i><span className="card-address">{address}</span>
                    <br />
                    <i className="fa-solid fa-phone"></i><span className="card-number">{phone}</span>
                    <br />
                    <i className="fa-solid fa-envelope"></i><span className="card-mail">{email}</span>
                </div>
            </div>
            
            <div className="col-2 top d-flex p-3 buttonIcons">
                <Link to={`/edit/${contact.id}`}>
                    <button className="btn">
                        <i className="fa-solid fa-pencil"></i>
                    </button>
                </Link>

                <button className="btn" onClick={handleDelete}>
                    <i className="fa-regular fa-trash"></i>
                </button>

            </div>
        </div>
    );
};

export default Card;