import React, { useContext } from "react";
import "../../styles/home.css";
import { Navbar } from "../component/navbar.js";
import  Card  from "../component/contactCard.js";
import { Context } from "../store/appContext";

//import store and actions


export const Home = () => {
    const { store, actions } = useContext(Context); // Destructure both store and actions

    return (
        <>
            <Navbar />
            <h1 className="header">My Contacts</h1>
            <div className="w-auto mt-5 panel-collapse collapse-show" aria-expanded="true" id="contactBlock">
                <ul className="list-group pull-down">
                    {store.contactList.map((contact, index) => (
                        <Card 
                            key={index} 
                            contact={contact} 
                            deleteContact={actions.deleteContact}  // Pass the deleteContact function
                            className="contact-card" 
                        />
                    ))}
                </ul>
            </div>
        </>
    );
};
