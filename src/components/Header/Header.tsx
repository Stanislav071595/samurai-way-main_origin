import React from 'react';
import hs from './Header.module.css';

export const Header = () => {
    return (
        <header className={hs.header}>
            <img src="https://i.pinimg.com/originals/b9/05/3d/b9053d873e9f69058997913e0fffca2e.png">
            </img>
            <span className={hs.span}>Ex_Stas.com</span>
        </header>
    )
}