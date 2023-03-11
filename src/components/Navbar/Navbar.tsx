import React from 'react';
import ns from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={ns.nav}>
            <div className={ns.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={ns.item}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={ns.item}>
                <a>News</a>
            </div>
            <div className={ns.item}>
                <a>Music</a>
            </div>
            <div className={ns.item}>
                <a>Settings</a>
            </div>

        </nav>
    )
}