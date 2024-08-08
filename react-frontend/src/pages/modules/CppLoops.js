import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import CppSidenav from '../../Controls/CppSidenav';

export default function CppLoops() {
    const { user, setProgress } = useContext(UserContext);
    const navigate = useNavigate();

    const saveProgress = async () => {
        const moduleScore = 50; // Example score for this module

        try {
            const res = await axios.post('http://localhost:5000/api/progress/save', {
                module: 'CppLoops',
                score: moduleScore,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setProgress((prevProgress) => [
                ...prevProgress.filter(p => p.module !== 'CppLoops'),
                { module: 'CppLoops', score: moduleScore, lastAccessed: new Date() }
            ]);
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    };

    const handleNext = async () => {
        await saveProgress();
        navigate('/Cpp-Functions'); // Redirect to the next lesson
    };

    return (
        <div className="cpp-loops">
            <CppSidenav />
            <div>
                <h1 className="Section-header">If Statements & Loops in C++</h1>
                <p className="Section-content">
                    Just as with variables, logic is another foundational piece to any programming language...
                </p>
                <br />
                <p className="Section-content">
                    Let's begin by looking at if statements...
                </p>
                <br />
                <p className="Section-content">
                    There are various operators for expressing logic in a condition...
                </p>
                <br />
                <table className="Var-table">
                    <tr>
                        <th>Operator</th>
                        <th>Usage</th>
                    </tr>
                    <tr>
                        <td><span>{">"}</span></td>
                        <td>Checks that one value is greater than another</td>
                    </tr>
                    <tr>
                        <td><span>{"<"}</span></td>
                        <td>Checks that one value is less than another</td>
                    </tr>
                    <tr>
                        <td>==</td>
                        <td>Checks that two values are equivalent to one another</td>
                    </tr>
                    <tr>
                        <td>&&</td>
                        <td>Appends multiple conditions; will be true only if both conditions are true</td>
                    </tr>
                    <tr>
                        <td>||</td>
                        <td>Appends multiple conditions; will be true if at least one of the conditions is true</td>
                    </tr>
                </table>
                <br />
                <p className="Section-content">
                    Now let's look at these operators in use...
                </p>
                <div className="Example">
                    <h2>Example 1: If / Else</h2>
                    <pre>
                        <code>
                            {`//Variable declaration
int testGrade = 90;
bool passed = false;

if(testGrade >= 60) {
    passed = true;
}

//Printing variables
if(passed == true){
    std::cout << "Student passed the exam" << std::endl;
}
else {
    std::cout << "Student did not pass the exam" << std::endl;
}
`}
                        </code>
                    </pre>
                    <h2>Result:</h2>
                    <pre>
                        <code>
                            {`Student passed the exam`}
                        </code>
                    </pre>
                </div>
                <br />
                <p className="Section-content">
                    Here we see two different forms of if statement usage...
                </p>
                <br />
                <p className="Section-content">
                    Now let's take a look at for loops.
                </p>
                <div className="Example">
                    <h2>Example 2: For Loops</h2>
                    <pre>
                        <code>
                            {`# Variable Declaration                       
int numLoops = 5;

//Loop Execution
for(int i = 0; i < numLoops; i++) {

//Printing Values
std::cout << i << std::endl;
}`}
                        </code>
                    </pre>
                    <h2>Result:</h2>
                    <pre>
                        <code>
                            {`0
1
2
3
4`}
                        </code>
                    </pre>
                </div>
                <br />
                <p className="Section-content">The parameters of a for loop are a bit more complex than that of an if statement...
                </p>
                <br />
                <p className="Section-content">Moving on, while loops function very similarly to for loops but with certain mechanical differences...
                </p>

                <div className="Example">
                    <h2>Example 3: While Loops</h2>
                    <pre>
                        <code>
                            {`//Variable Declaration         
String display = "";

int limit = 5;
int current = 0;

//Loop Execution
while(current < limit) {
    current++;
    display += "A";
//Printing Values
std::cout << display << std::endl;
}`}
                        </code>
                    </pre>
                    <h2>Result:</h2>
                    <pre>
                        <code>
                            {`A
AA
AAA
AAAA
AAAAA`}
                        </code>
                    </pre>
                </div>
                <br />
                <p className="Section-content">Just like for loops, while loops will repeatedly execute whatever code they contain within until their condition is 
                    no longer true...
                </p>

                <br />
                <div className="Centered-container">
                    <div className="Centered">
                        <div className="Bottom-buttons">
                            <Link to="/Cpp-Variables"><button className="Lesson-transition">Prev</button></Link>
                            <Link to="/Cpp-Loops-Test"><button className="Lesson-transition">Exercises</button></Link>
                            <button onClick={handleNext} className="Lesson-transition">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

