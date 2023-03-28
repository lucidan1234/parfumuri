
import React from "react";
import { Link } from "react-router-dom";
import "./style/Navbar.css";

const Navbar = () => {



    return (
        <div className="nav_container">
            <span>
                <Link to="/"></Link>
            </span>
            <nav className="navbar_links">
                <ul className="ul">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Card</Link></li>
                    <li><Link to="/">Search</Link></li>
                    <li><Link to="/">Contact</Link></li>

                </ul>
            </nav>
        </div>
    );
};
export default Navbar;