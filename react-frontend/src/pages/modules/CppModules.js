// CppModules.js

import React, { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext'; // Corrected path
import CppSidenav from '../../Controls/CppSidenav';

function CppModules() {
    const { languages } = useContext(LanguageContext);
    const cppLanguage = languages.find(lang => lang.name === 'C++');
    const cppModules = cppLanguage.modules;

    return (
        <div className="cpp-module"> {/* Replace id with className */}
            <CppSidenav />
            <div className="content">
                <h1 className="Section-header">C++ Modules</h1>
                <div className="cpp-details">
                   <br/>
                    <p className="Section-content">
                        C++ is a general-purpose programming language created as an extension of the C programming language. It is known for its performance, efficiency, and flexibility. C++ supports both procedural and object-oriented programming paradigms, making it a versatile language for various types of software development.
                    </p>
                    <br />
                    <p className="Section-content">Some common uses of C++ include:</p>
                    <ul className="Java-lessons">
                        <li>System Software: Operating systems, device drivers, and system utilities.</li>
                        <li>Game Development: Game engines, graphics, and real-time simulations.</li>
                        <li>Embedded Systems: Software for embedded devices and IoT applications.</li>
                        <li>Application Software: Desktop applications, web browsers, and database management systems.</li>
                        <li>High-Performance Applications: Financial modeling, simulations, and scientific computing.</li>
                    </ul>
                    <br />
                    <p className="Section-content">
                        Despite its age, C++ remains one of the most in-demand programming languages due to its efficiency, versatility, and extensive library support. 
                        Once finished with these lessons, you will know the basics of the language and will be well on your way to creating C++ programs of your own!
                    </p>
                    <br />
                    <div className="Centered-container">
                        <div className="Centered">
                            <a href="/Cpp-variables"><button class="JModule-next"><span>Begin Lessons </span></button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CppModules;
