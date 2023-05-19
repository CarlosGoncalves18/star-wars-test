import { Link } from "react-router-dom";
import React from "react";

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar">
                <div className="narbar__logo">SWAPI APP</div>
                <ul className="navbar__link-container">
                    <li className="navbar__links">
                        <Link to="/">Characters</Link>
                    </li>
                    <li className="navbar__links">
                        <Link to="/planets">Planets</Link>
                    </li>
                    <li className="navbar__links">
                        <Link to="/starships">Starships</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
