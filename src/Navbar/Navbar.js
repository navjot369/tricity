import "./Navbar.css";
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return(<div className="navbarCont">
        <div className="logo">Tricity Terra Magic</div>
        <div className="links-cont">
            <Link to="/" className="links">Home</Link>
            <Link to="/" className="links">Properties</Link>
            <Link to="/" className="links">Sign In</Link>
        </div>
    </div>);
}