import React from "react";
import { FaInstagram, FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">

                <div className="footer__col">
                    <h3 className="footer__logo">Travel Memories Map</h3>
                    <p className="footer__desc">
                        Explore the world, collect memories, and discover new places.
                        Your personal travel companion.
                    </p>
                    <p className="footer__copy">© 2025 TravelApp. All rights reserved.</p>
                </div>

                <div className="footer__col">
                    <h4>Navigation</h4>
                    <ul className="footer__links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#map">Map</a></li>
                        <li><a href="#bucket-list">Gallery</a></li>
                        <li><a href="#about">Bucket List</a></li>
                    </ul>
                </div>

                <div className="footer__col">
                    <h4>Stay Connected</h4>
                    <div className="footer__socials">
                        <a href="#" className="social-icon"><FaInstagram /></a>
                        <a href="#" className="social-icon"><FaTelegram /></a>
                        <a href="#" className="social-icon"><FaLinkedin /></a>
                        <a href="#" className="social-icon"><FaGithub /></a>
                    </div>

                    <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Your email..." />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>

            </div>
        </footer>
    );
}