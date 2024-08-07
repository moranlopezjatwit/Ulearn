import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import PythonSidenav from '../../Controls/PythonSidenav';

export default function PythonFunctions() {
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
                module: 'PythonFunctions',
                score: moduleScore,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setProgress((prevProgress) => [
                ...prevProgress.filter(p => p.module !== 'PythonFunctions'),
                { module: 'PythonFunctions', score: moduleScore, lastAccessed: new Date() }
            ]);
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    };

    return (
        <div className="python-functions">
            <PythonSidenav />
            <div>
                <h1 className="Section-header">Python Functions</h1>
                <p className="Section-content">
                    Python functions are reusable blocks of code that perform a specific task. They help in organizing code into manageable pieces, promote code reuse, and make it easier to debug and maintain your program. Functions in Python are defined using the <code>def</code> keyword, and they can accept parameters and return values.
                </p>
                <br />
                <p className="Section-subcontentcd">Explore how to define, call, and use Python functions effectively to modularize your code and improve its readability and maintainability.</p>

                <div className="Example">
                    <h2>Defining a Function</h2>
                    <p>To define a function in Python, use the <code>def</code> keyword followed by the function name and parentheses <code>()</code>. Here's an example:</p>
                    <pre>
                        <code>
                            {`def greet(name):
    print(f"Hello, {name}!")`}
                        </code>
                    </pre>
                    <p>In this example, the function <code>greet</code> takes one parameter <code>name</code> and prints a greeting message.</p>
                </div>

                <div className="Example">
                    <h2>Calling a Function</h2>
                    <p>To call a function, simply use its name followed by parentheses <code>()</code> with any required arguments inside. For example:</p>
                    <pre>
                        <code>
                            {`greet("Alice")`}
                        </code>
                    </pre>
                    <p>This will output: <code>Hello, Alice!</code></p>
                </div>

                <div className="Example">
                    <h2>Function with Return Value</h2>
                    <p>Functions can also return values using the <code>return</code> statement. Here's an example:</p>
                    <pre>
                        <code>
                            {`def add(a, b):
    return a + b`}
                        </code>
                    </pre>
                    <p>You can capture the returned value in a variable:</p>
                    <pre>
                        <code>
                            {`result = add(3, 5)
print(result)`}
                        </code>
                    </pre>
                    <p>This will output: <code>8</code></p>
                    <div class="Centered-container">
                        <div class="Centered">
                            <div class="Bottom-buttons">
                                <Link to="/Python-Loops"><button class="Lesson-transition">Prev</button></Link>
                                <Link to="/Python-Functions-Test"><button class="Lesson-transition">Exercises</button></Link>
                                <button class="Hidden-button"></button>
                                <button className="Lesson-transition" onClick={saveProgress}>Complete Module</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
