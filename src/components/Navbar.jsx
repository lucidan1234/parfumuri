
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style/navbar.css";


const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="nav_container">
            <span>
                <Link to="/"></Link>
            </span>
            <nav className="navbar_links">
                <ul className="ul">
                    <li onClick={() => navigate("/")}>Home</li>
                    <li onClick={() => navigate("/contact")}>Contact</li>
                    <li onClick={() => navigate("/order")}>Order</li>

                </ul>
            </nav>
        </div>
    );
};
export default Navbar;