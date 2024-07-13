import React from 'react';
import { Link } from 'react-router-dom';
import PythonSidenav from '../../Controls/PythonSidenav';


export default function PythonVariables() {
    return (
        <div id="App-container">
            <PythonSidenav />
            <div>
            <h1 class="Section-header">Variables</h1>
            <p class="Section-content">For any programming language, variables are one of the fundamental building blocks with which software
                    is built. A variable can be thought of as a method of information storage that is associated with a name. You can choose a value 
                    for the variable to remember during its creation, or you can leave it empty until it's needed. additionally, variables can be used 
                    to manipulate the information that they store, or they can overwrite it with new information if needed.
                </p>
                <br />
                <p>Look at the example image below to see what variable creation looks like in python:</p>

            </div>
       </div>
    );
}
