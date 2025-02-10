import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import logo from "../../assets/images/logo-white.png";
import "./index.css";
function Footer() {
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail("");
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-header">
                    <Link to="/" className="footer-logo">
                        <img height='28' src={logo} alt="logo"/>
                        <span>Позитивус</span>
                    </Link>
                    <div className="footer-nav">
                        <Link to="/about">О нас</Link>
                        <Link to="/services">Услуги</Link>
                        <Link to="/use-cases">Кейсы</Link>
                        <Link to="/pricing">Цены</Link>
                        <Link to="/blog">Блог</Link>
                    </div>
                </div>
                <div className='footer-content'>
                    <div className="footer-info">
                        <h4>Cвязаться с нами:</h4>
                        <div className="footer-text">
                            <p>Email: <a href='mailto:info@positivus.com'>info@positivus.com</a></p>
                            <p>Телефон: <a href='tel:5555678901'>555-567-8901</a></p>
                            <p>Адрес: 12345, штат Стардаст, Мунстоун-Сити, Главная улица, 12345</p>
                        </div>
                    </div>
                    <form className="footer-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Подписаться на новости</button>
                    </form>
                </div>
                <div className="footer-social">
                    <a href="#" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a href="#" target='_blank'><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="#" target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
                <div className="footer-bottom">
                    <span>&copy; 2025 Позитивус. все права защищены.</span>
                    <Link to="/privacy">Политика конфиденциальности</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
