import React from "react";
import "./Header.scss";
const Header = () => {
    return (
        <div className="header-container">
            <div className="header-logo-container">
                <div className="header-logo">scekabase</div>
            </div>
            <div className="header-buttons">
                <button className="header-button">
                    <a href="/homepage">Get started</a>
                </button>
            </div>
        </div>
    );
};

export default Header;
