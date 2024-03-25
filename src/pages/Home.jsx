import React from 'react';
import BannerImage from '../assets/background.jpg';
import '../styles/Home.scss';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
        <div className="home">
            <div className="headerContainer" style={{ backgroundImage: `url(${BannerImage})` }}>
                <div className="blurContainer">
                    <div className="blur"></div>
                </div>
                <Link to="/Category" className="categoryLink">
                    <button className="categoryLink">Start</button>
                </Link>
            </div>
        </div>
        </>
    );
}

export default Home;