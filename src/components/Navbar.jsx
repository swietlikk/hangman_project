import React from 'react';
import BannerImage from '../assets/western.jpg';
import '../styles/Navbar.scss';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className="navbar">
                <h1 className="hdl">Hangman</h1>
            </div>
        </>
    );
}

export default Navbar;