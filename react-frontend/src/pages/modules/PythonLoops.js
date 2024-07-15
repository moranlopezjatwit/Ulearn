import React from 'react';
import { Link } from 'react-router-dom';
import PythonSidenav from '../../Controls/PythonSidenav';

export default function PythonLoops() {
    return (
        <div className="pythonloop"> {/* Replace id with className */}
            <PythonSidenav />
            <div>
                <h1 className="Section-header">Python Loops</h1>
                <p className="Section-content">
                    Python loops are used to iterate over a sequence (list, tuple, string, or range) or other iterable objects. There are several types of loops in Python, including <code>for</code> loops and <code>while</code> loops, which allow you to repeatedly execute a block of code until a specified condition is met.
                </p>
                <br />
                <p>Explore the different types of Python loops to understand how they can be used to automate repetitive tasks and make your code more efficient.</p>
            </div>
        </div>
    );
}


/*export default function PythonLoops() {
    return (
        <div id="App-container">
            <PythonSidenav />
            Python Loops
        </div>
    );
} */