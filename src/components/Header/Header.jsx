import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/img/logo.png";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
    };

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__left">
                    <div className="header__logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="header__title-block">
                        <h1 className="header__title">Travel Memories Map</h1>
                        <p className="header__subtitle">Travel. Remember. Relive</p>
                    </div>
                </div>

                <div className={`header__menu ${isMenuOpen ? "active" : ""}`}>
                    <nav className="header__nav">
                        <a className="header__link" href="#" onClick={() => setIsMenuOpen(false)}>Map</a>
                        <a className="header__link" href="#" onClick={() => setIsMenuOpen(false)}>Gallery</a>
                        <a className="header__link" href="#" onClick={() => setIsMenuOpen(false)}>Bucket List</a>
                    </nav>

                    <div className="header__auth">
                        <button className="header__btn header__btn--login">Log In</button>
                        <button className="header__btn header__btn--signup">Sign Up</button>
                    </div>
                </div>

                <div
                    className={`header__burger ${isMenuOpen ? "active" : ""}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
}