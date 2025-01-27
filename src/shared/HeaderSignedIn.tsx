import React from "react";
import logo from '../assets/Mealprepper.png';

export const HeaderSignedIn: React.FC = () => {
    return (
        <>
        <header className="navbar">
        <div className="nav-left">
            <div className="logo">
            <img src={logo} alt="Mealprepper Logo" />
            </div>
            <nav>
                <a href="/search-recipes">
                    <button className="button-search">Search New Recipe</button>
                </a>
            </nav>
        </div>
        </header>
        </>
    );
};