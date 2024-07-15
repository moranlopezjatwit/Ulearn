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
                    <h2>About C++</h2>
                    <p>
                        C++ is a general-purpose programming language created as an extension of the C programming language. It is known for its performance, efficiency, and flexibility. C++ supports both procedural and object-oriented programming paradigms, making it a versatile language for various types of software development.
                    </p>
                    <br />

                    <h2>Common Uses of C++</h2>
                    <ul>
                        <li>System Software: Operating systems, device drivers, and system utilities.</li>
                        <li>Game Development: Game engines, graphics, and real-time simulations.</li>
                        <li>Embedded Systems: Software for embedded devices and IoT applications.</li>
                        <li>Application Software: Desktop applications, web browsers, and database management systems.</li>
                        <li>High-Performance Applications: Financial modeling, simulations, and scientific computing.</li>
                    </ul>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default CppModules;
