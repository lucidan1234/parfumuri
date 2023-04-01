import React from "react";
import './style/contact.css'
import Navbar from "./navbar";


const Contact = () => {
    return (
        <div><Navbar />
            <div className="contact-container">
                <label className="name">Name or Phone number</label>
                <input type="text" placeholder="name / phone number" />
                <label className="email">Email</label>
                <input type="text" placeholder="email@home.com" />
                <label className="topic">Topic</label>
                <input type="text" placeholder="text" />

                <button className="submit" type="submit">Send</button>
            </div>
        </div>
    )
}

export default Contact;