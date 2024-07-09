import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles.css';
export default function footer() {
    return (
        <div className="Footer-body">
            <div id="Footer-title">Improve the way ULearn today!</div>
            <nav className="Footer-nav">
                <ul>
                    <li>Temp Text</li>
                    <li>Temp Text</li>
                    <li>Temp Text</li>
                </ul>
            </nav>

            <nav className="Footer-nav">
                <ul>
                    <li>Feedback</li>
                    <li>Report A Bug</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </div>
    );
}