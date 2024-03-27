import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {

    return(
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo-container">
                    <Link to="/" className="navbar-logo">
                        DBD Hub
                    </Link>
                </div>
                <div className="navbar-links-container">
                    <Link to="/random-perk-generator">Random Perk Generator</Link>
                    <p>Create a Build</p>
                    <p>Vote Builds</p>
                    <p>Leaderboard</p>
                    <p>SWF</p>
                </div>
            </div>
        </nav>
    )
}