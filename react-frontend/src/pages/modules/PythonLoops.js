import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import PythonSidenav from '../../Controls/PythonSidenav';

export default function PythonLoops() {
    const { user, setProgress } = useContext(UserContext);

    useEffect(() => {
        return () => {
            if (user) {
                saveProgress();
            }
        };
    }, []);

    const saveProgress = async () => {
        const moduleScore = 50; // Example score for this module

        try {
            const res = await axios.post('http://localhost:5000/api/progress/save', {
                module: 'PythonLoops',
                score: moduleScore,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setProgress((prevProgress) => [
                ...prevProgress.filter(p => p.module !== 'PythonLoops'),
                { module: 'PythonLoops', score: moduleScore, lastAccessed: new Date() }
            ]);
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    };

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
                                <Link to="/Python-Variables"><button class="Lesson-transition">Prev</button></Link>
                                <Link to="/Python-Loops-Test"><button class="Lesson-transition">Exercises</button></Link>
                                <Link to="/Python-Functions"><button class="Lesson-transition" onClick={saveProgress}>Next</button></Link>
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
