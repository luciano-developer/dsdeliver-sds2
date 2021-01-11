import React from "react";
import "./style.css";
import { ReactComponent as Logo } from "./logo.svg";
function NavBar(){
    return(
        <nav className="main-navbar">
            <Logo />
            <a href="#" className="logo-text">DS Deliver</a>
        </nav>
    );
}

export default NavBar;