import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./hamburgerMenu.css";


export default function HamburgerMenu() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return(
        <div>
            <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav className={`navigation ${menuOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/random-perk-generator">Random Perk Generator</Link></li>
                </ul>
            </nav>
        </div>
    )
}