import React from "react";
import HamburgerMenu from "../components/hamburgerMenu";
import "./homescreen.css";

export default function Homescreen() {


    return(
        <div className="main-container">
            <div className="menu">
                <HamburgerMenu />
            </div>
            
            <div>
                <h3>This is the homescreen</h3>
            </div>
        </div>
    )
};