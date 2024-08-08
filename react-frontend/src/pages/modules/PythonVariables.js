import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import PythonSidenav from '../../Controls/PythonSidenav';

export default function PythonVariables() {
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
                module: 'PythonVariables',
                score: moduleScore,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setProgress((prevProgress) => [
                ...prevProgress.filter(p => p.module !== 'PythonVariables'),
                { module: 'PythonVariables', score: moduleScore, lastAccessed: new Date() }
            ]);
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    };

    return (
        <div className="pythonvariables">
            <PythonSidenav className="pythonsidenav" />
            <div>
                <h1 className="Section-header">Using Variables in Python</h1>
                <p className="Section-content">
                    For any programming language, variables are one of the fundamental building blocks with which software is built. A variable can be thought of as a method of information storage that is associated with a name. You can choose a value for the variable to remember during its creation, or you can leave it empty until it's needed. Additionally, variables can be used to manipulate the information that they store, or they can be overwritten with new information if needed.
                </p>
                <br />

                <p className="Section-content">There are many different variable types depending on what kind of data needs to be stored. Reference the table
                    below to know what type of data each one can be used for:</p>
                <br />
                <table className="Var-table">
                    <tr>
                        <th>Variable Type</th>
                        <th>Storage Size</th>
                        <th>Usage</th>
                    </tr>
                    <tr>
                        <td>boolean</td>
                        <td>1 bit</td>
                        <td>Stores a single true or false value</td>
                    </tr>
                    <tr>
                        <td>byte</td>
                        <td>1 byte</td>
                        <td>Stores a whole value between -128 & 127</td>
                    </tr>
                    <tr>
                        <td>short</td>
                        <td>2 bytes</td>
                        <td>Stores a whole value between -32,768 & 32767</td>
                    </tr>
                    <tr>
                        <td>char</td>
                        <td>2 bytes</td>
                        <td>Stores a single character or ASCII value</td>
                    </tr>
                    <tr>
                        <td>int</td>
                        <td>4 bytes</td>
                        <td>Stores a whole value between -2,147,483,648 & 2,147,483,647</td>
                    </tr>
                    <tr>
                        <td>float</td>
                        <td>4 bytes</td>
                        <td>Stores a decimal value up to 6 digits</td>
                    </tr>
                    <tr>
                        <td>long</td>
                        <td>8 bytes</td>
                        <td>Stores a whole value between -9,223,372,036,854,775,808 & 9,223,372,036,854,775,807</td>
                    </tr>
                    <tr>
                        <td>double</td>
                        <td>8 bytes</td>
                        <td>Stores a decimal value up to 15 digits</td>
                    </tr>
                </table>
                <br />

                <p>Look at the examples below to understand how variables work in Python:</p>

                <div className="Example">
                    <h2>Example 1: Basic Variable Usage</h2>
                    <p>Here's how you declare and use variables in Python:</p>
                    <pre>
                        <code>
                            {`# Variable declaration and usage
name = "Bob"
age = 25

# Printing variables
print("Name: " + name)
print("Age: " + age)`}
                        </code>
                    </pre>
                    <p>In this example:</p>
                    <ul>
                        <li><code>name</code> stores the string <code>"Bob"</code>.</li>
                        <li><code>age</code> stores the integer <code>25</code>.</li>
                        <li>We print the values stored in these variables using <code>print()</code>.</li>
                    </ul>
                </div>

                <div className="Example">
                    <h2>Example 2: Variables and Mathematical Operations</h2>
                    <p>Variables can store numeric values and perform calculations:</p>
                    <pre>
                        <code>
                            {`# Variable declaration and mathematical operations
num1 = 10
num2 = 5

# Addition
sum = num1 + num2
print("Sum:", sum)

# Subtraction
difference = num1 - num2
print("Difference:" + difference)`}
                        </code>
                    </pre>
                    <p>In this example:</p>
                    <ul>
                        <li><code>num1</code> and <code>num2</code> store integers <code>10</code> and <code>5</code> respectively.</li>
                        <li>We perform addition and subtraction operations using these variables.</li>
                        <li>Results are printed using <code>print()</code>.</li>
                    </ul>
                </div>

                <div className="Example">
                    <h2>Example 3: Variables and String Manipulation</h2>
                    <p>Variables can also store and manipulate strings:</p>
                    <pre>
                        <code>
                            {`# Variable declaration and string manipulation
greeting = "Hello"
name = "Alice"

# Concatenation
message = greeting + ", " + name + "!"
print(message)`}
                        </code>
                    </pre>
                    <p>In this example:</p>
                    <ul>
                        <li><code>greeting</code> stores the string <code>"Hello"</code>.</li>
                        <li><code>name</code> stores the string <code>"Alice"</code>.</li>
                        <li>We concatenate these strings to form a greeting message.</li>
                        <li>The final message is printed using <code>print()</code>.</li>
                    </ul>
                    <div class="Centered-container">
                        <div class="Centered">
                            <div class="Bottom-buttons">
                                <Link to="/Python-Modules"><button class="Lesson-transition">Prev</button></Link>
                                <Link to="/Python-Vars-Test"><button class="Lesson-transition">Exercises</button></Link>
                                <Link to="/Python-Loops"><button class="Lesson-transition" onClick={saveProgress}>Next</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



