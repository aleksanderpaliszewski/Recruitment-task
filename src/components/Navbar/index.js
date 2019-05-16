import React from 'react';
import styles from './style.module.scss'
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <div className={styles.topnav} id="myTopnav">
            <NavLink
                to="/contact"
                activeStyle={{
                    fontWeight: "bold",
                    color: "#123abc"
                }}
            >Contact</NavLink>
            <NavLink
                to="/about"
                activeStyle={{
                    fontWeight: "bold",
                    color: "#123abc"
                }}
            >About</NavLink>
            <NavLink
                to="/home"
                activeStyle={{
                    fontWeight: "bold",
                    color: "#123abc"
                }}
            >Home</NavLink>
            <h5><a href={"/home"}>LOGO</a></h5>
        </div>
    )
}

export default NavBar;