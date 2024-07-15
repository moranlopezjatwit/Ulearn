import React from 'react';
import { Link } from 'react-router-dom';
import PythonSidenav from '../../Controls/PythonSidenav';

export default function PythonLoops() {
    return (
        <div className="pythonloop">
            <PythonSidenav />
            <div>
                <h1 className="Section-header">Python Loops</h1>
                <p className="Section-content">
                    Python loops are used to iterate over a sequence (list, tuple, string, or range) or other iterable objects. There are several types of loops in Python, including <code>for</code> loops and <code>while</code> loops, which allow you to repeatedly execute a block of code until a specified condition is met.
                </p>
                <br />
                <p>Explore the different types of Python loops to understand how they can be used to automate repetitive tasks and make your code more efficient.</p>

                <div className="Example">
                    <h2>Example 1: For Loop</h2>
                    <p>A <code>for</code> loop is used to iterate over a sequence (like a list or a string). Here's an example:</p>
                    <pre>
                        <code>
                            {`# For loop example
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)`}
                        </code>
                    </pre>
                    <p>In this example, the loop will iterate over each item in the <code>fruits</code> list and print it.</p>
                </div>

                <div className="Example">
                    <h2>Example 2: While Loop</h2>
                    <p>A <code>while</code> loop will keep executing a block of code as long as a condition is true. Here's an example:</p>
                    <pre>
                        <code>
                            {`# While loop example
count = 1
while count <= 5:
    print("Count is:", count)
    count += 1`}
                        </code>
                    </pre>
                    <p>In this example, the loop will run until <code>count</code> is greater than 5, printing the current value of <code>count</code> each time.</p>
                </div>
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