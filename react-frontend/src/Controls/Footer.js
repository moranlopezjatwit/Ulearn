import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles.css';
export default function footer() {
    return (
        <div className="Footer-body">
            <nav className="Footer-nav">
                <ul>
                    <li>Feedback</li>
                    <li>Report A Bug</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
            <div id="Footer-title">Improve the way ULearn today!</div>
            <div id="Footer-version">v0.8.0</div>
        </div>
    );
}