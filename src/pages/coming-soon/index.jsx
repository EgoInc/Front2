import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function ComingSoon() {
    return (
        <div className="container-page coming-soon">
            <div className="container">
                <h1 className='mb-20'>В разработке</h1>
                <p>Эта страница скоро появится. Мы работаем над ней</p>
                <Link to="/" className="button-green">На главную</Link>
            </div>
        </div>
    );
}

export default ComingSoon;