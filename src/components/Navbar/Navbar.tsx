import React from 'react';
import ns from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={ns.nav}>
            <div className={ns.item}>
                <NavLink to="/profile" activeClassName={ns.activeLink}>Profile</NavLink>
            </div>
            <div className={ns.item}>
                <NavLink to="/dialogs" activeClassName={ns.activeLink}>Messages</NavLink>
            </div>
            <div className={ns.item}>
                <NavLink to="/news" activeClassName={ns.activeLink}>News</NavLink>
            </div>
            <div className={ns.item}>
                <NavLink to="music" activeClassName={ns.activeLink}>Music</NavLink>
            </div>
            <div className={ns.item}>
                <NavLink to="/settings" activeClassName={ns.activeLink}>Settings</NavLink>
            </div>

        </nav>
    )
}