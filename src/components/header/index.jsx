import React, {useEffect, useState} from 'react';
import logo from "../../assets/images/logo.png";
import "./index.css";
import {Link, NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && !event.target.closest('.navbar') && !event.target.closest('.menu-toggle')) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [menuOpen]);

    const getNavLinkClass = ({ isActive }) => isActive ? "nav-link active" : "nav-link";

    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    <img src={logo} height='36' alt="logo"/>
                    <span>Позитивус</span>
                </Link>
                <button className="menu-toggle" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </button>
                <nav className={`navbar ${menuOpen ? "open" : ""}`}>
                    <NavLink to="/about" className={getNavLinkClass} onClick={closeMenu}>О нас</NavLink>
                    <NavLink to="/services" className={getNavLinkClass} onClick={closeMenu}>Услуги</NavLink>
                    <NavLink to="/use-cases" className={getNavLinkClass} onClick={closeMenu}>Кейсы</NavLink>
                    <NavLink to="/pricing" className={getNavLinkClass} onClick={closeMenu}>Цены</NavLink>
                    <NavLink to="/blog" className={getNavLinkClass} onClick={closeMenu}>Блог</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-button active" : "nav-button"} onClick={closeMenu}>Оставить заявку</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
