import React from 'react';
import { Link } from 'react-router-dom';
import PythonSidenav from '../../Controls/PythonSidenav';

export default function PythonVariables() {
    return (
        <div className="pythonvariables">
            <PythonSidenav />
            <div>
                <h1 className="Section-header">Variables</h1>
                <p className="Section-content">
                    For any programming language, variables are one of the fundamental building blocks with which software is built. A variable can be thought of as a method of information storage that is associated with a name. You can choose a value for the variable to remember during its creation, or you can leave it empty until it's needed. Additionally, variables can be used to manipulate the information that they store, or they can overwrite it with new information if needed.
                </p>
                <br />
                <p>Look at the example below to understand how variables work in Python:</p>
                <div className="Example">
                    <h2>Example: Using Variables in Python</h2>
                    <p>Python uses straightforward syntax for variables. Here's how you declare and use a variable:</p>
                    <pre>
                        <code>
                            {`# Variable declaration
name = "Alice"
age = 30

# Printing variables
print("Name:", name)
print("Age:", age)`}
                        </code>
                    </pre>
                    <p>In this example:</p>
                    <ul>
                        <li><code>name</code> is a variable storing the string <code>"Alice"</code>.</li>
                        <li><code>age</code> is a variable storing the integer <code>30</code>.</li>
                        <li>We print the values stored in these variables using <code>print()</code>.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}