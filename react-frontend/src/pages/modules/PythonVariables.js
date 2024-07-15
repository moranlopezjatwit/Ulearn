import React from 'react';
import { Link } from 'react-router-dom';
import PythonSidenav from '../../Controls/PythonSidenav';


export default function PythonVariables() {
    return (
        <div className="pythonvariables"> {/* Replace id with className */}
            <PythonSidenav />
            <div>
                <h1 className="Section-header">Variables</h1>
                <p className="Section-content">
                    For any programming language, variables are one of the fundamental building blocks with which software is built. A variable can be thought of as a method of information storage that is associated with a name. You can choose a value for the variable to remember during its creation, or you can leave it empty until it's needed. Additionally, variables can be used to manipulate the information that they store, or they can overwrite it with new information if needed.
                </p>
                <br />
                <p>Look at the example image below to see what variable creation looks like in Python:</p>
                {/* Add your example image component or markup here */}
            </div>
        </div>
    );
}