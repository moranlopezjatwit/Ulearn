import React, { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext'; // Corrected path
import JavaSidenav from '../../Controls/JavaSidenav';

function JavaModules() {
    const { languages } = useContext(LanguageContext);
    const javaLanguage = languages.find(lang => lang.name === 'Java');
    const javaModules = javaLanguage.modules;

    return (
        <div id="App-container">
            <JavaSidenav />
            <div>
                <h1 className="Section-header">Java Modules</h1>
                <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is widely used for building enterprise-scale applications, Android apps, web applications, and more.</p>
                <br />
                <p>Some common uses of Java include:</p>
                <br />
                <ul>
                    <li>Web Development</li>
                    <li>Android App Development</li>
                    <li>Enterprise Applications</li>
                    <li>Scientific Computing</li>
                    <li>Big Data Technologies</li>
                    <li>Embedded Systems</li>
                </ul>
                
            </div>
        </div>
    );
}

export default JavaModules;

