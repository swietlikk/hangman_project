import React from 'react';
import BannerImage from '../assets/background.jpg';
import '../styles/Category.scss';
import { Link } from 'react-router-dom';

function Category() {
    return (
        <>
            <div className="category">
                <div className="categoryContainer" style={{ backgroundImage: `url(${BannerImage})` }}>
                    <h2 className="hdl_Category">Category</h2>
                    <div className="categoryContainer_Categories"></div>
                    <div className="categories_Box">
                        <Link to="/game/animals" className="categoryLink_Game">Animals</Link>
                        <Link to="/game/food" className="categoryLink_Game">Food</Link>
                        <Link to="/game/countries" className="categoryLink_Game">Countries</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Category;