// JavaModules.js

import React, { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext'; // Corrected path
import JavaSidenav from '../../Controls/JavaSidenav';


function JavaModules() {
    const { languages } = useContext(LanguageContext);
    const javaLanguage = languages.find(lang => lang.name === 'Java');
    const javaModules = javaLanguage.modules;

    return (
        <div className="java-module"> {/* Replace id with className */}
            <JavaSidenav />
            <div>
                <h1 className="Section-header">Java Modules</h1>
                <p className="Section-content">Java is a high-level object-oriented programming language that is designed to
                    have as few implementation dependencies as possible. It is known for its robustness and high level of portability,
                    making it popular for building enterprise-scale applications, Android apps, web applications, and more!</p>
                <br />

                <p>Some common uses of Java include:</p>
                <br />
                <ul className="Java-lessons">
                    <li>Web Development</li>
                    <li>Android App Development</li>
                    <li>Enterprise Applications</li>
                    <li>Scientific Computing</li>
                    <li>Big Data Technologies</li>
                    <li>Embedded Systems</li>
                </ul>

                <br/>
                <p className="Section-content">Java is currently one of the most popular programming languages worldwide, and for good reason.
                    It is open-source, simple to learn, intuitive to use, and has highly active developer community. By the time you complete these lessons, you
                    will have the foundational programming knowledge to begin creating your own Java applications.</p>
                <br /><br />
                <div className="Centered-container">
                <div className="Centered">
                        <a href="/Java-variables"><button class="JModule-next"><span>Begin Lessons </span></button></a>
                </div>
                </div>
            </div>
        </div>
    );
}

export default JavaModules;


