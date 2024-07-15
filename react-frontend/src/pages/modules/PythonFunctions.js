import React from 'react';
import { Link } from 'react-router-dom';
import PythonSidenav from '../../Controls/PythonSidenav';

export default function PythonFunctions() {
    return (
        <div className="python-functions"> {/* Replace id with className */}
            <PythonSidenav />
            <div>
                <h1 className="Section-header">Python Functions</h1>
                <p className="Section-content">
                    Python functions are reusable blocks of code that perform a specific task. They help in organizing code into manageable pieces, promote code reuse, and make it easier to debug and maintain your program. Functions in Python are defined using the `def` keyword, and they can accept parameters and return values.
                </p>
                <br />
                <p>Explore how to define, call, and use Python functions effectively to modularize your code and improve its readability and maintainability.</p>
            </div>
        </div>
    );
}
