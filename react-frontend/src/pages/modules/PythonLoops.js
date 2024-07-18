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

                <div className="Example">
                    <h2>Example 3: For Loop with Range</h2>
                    <p>You can use the <code>range()</code> function with a <code>for</code> loop to iterate over a sequence of numbers. Here's an example:</p>
                    <pre>
                        <code>
                            {`# For loop with range example
for i in range(5):
    print("Iteration:", i)`}
                        </code>
                    </pre>
                    <p>In this example, the loop will iterate from 0 to 4, printing the current iteration number each time.</p>
                </div>

                <div className="Example">
                    <h2>Example 4: Nested For Loop</h2>
                    <p>A nested <code>for</code> loop is a loop inside another loop. Here's an example:</p>
                    <pre>
                        <code>
                            {`# Nested for loop example
for i in range(3):
    for j in range(2):
        print(f"i: {i}, j: {j}")`}
                        </code>
                    </pre>
                    <p>In this example, the outer loop runs three times, and for each iteration of the outer loop, the inner loop runs twice, printing the values of <code>i</code> and <code>j</code>.</p>
                    <div class="Centered-container">
                        <div class="Centered">
                            <div class="Bottom-buttons">
                                <a href="/Python-Variables"><button class="Lesson-transition">Prev</button></a>
                                <a href="/Python-Functions"><button class="Lesson-transition">Next</button></a>
                            </div>
                        </div>
                    </div>
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