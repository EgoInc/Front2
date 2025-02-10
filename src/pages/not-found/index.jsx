import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function NotFound() {
    return (
        <div className="container-page not-found">
            <div className="container">
                <h1 className='mb-20'>404</h1>
                <p>Страница не найдена</p>
                <Link to="/" className="button-green">Вернуться на главную</Link>
            </div>
        </div>
    );
}

export default NotFound;