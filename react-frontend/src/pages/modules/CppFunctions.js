import React, { useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link here
import { UserContext } from '../../context/UserContext';
import CppSidenav from '../../Controls/CppSidenav';

export default function CppFunctions() {
    const { user } = useContext(UserContext);

    const handleCompleteLesson = async (score) => {
        try {
            const res = await axios.post('http://localhost:5000/api/progress/save', {
                module: 'CppFunctions',
                score,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log('Progress saved:', res.data);
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    };

    return (
        <div className="cpp-functions"> {/* Replace id with className */}
            <CppSidenav />
            <div>
                <h1 className="Section-header">C++ Functions</h1>
                <br />
                <p className="Section-content">Functions in C++ are blocks of code that can be reused to execute a specific operation. This is helpful for organizing
                    code and reducing time spent completing a program. Look at the example below to see the architecture of a C++ function.
                </p>
                <br />
                <div className="Example">
                    <h2>Example 1: Function Creation and calling</h2>
                    <pre>
                        <code>
                            {`//Function creation
void greetWorld(){
std::cout << "Hello World!" << std::endl;
}

//Function call
greetWorld();
greetWorld();`}
                        </code>
                    </pre>
                    <h2>Result:</h2>
                    <pre>
                        <code>
                            {`Hello World!
Hello World!`}
                        </code>
                    </pre>
                </div>
                <br />
                <p className="Section-content">
                    Let's break down greetWorld into the components that make it up. first is the <div className="Bold-word">return type</div>, which defines what
                    data type the function will return when it finishes executing. This function's return type is <code>void</code>, which means it executes its code
                    without returning any data. Second are the <div className="Bold-word">parameters</div> of the function. This is data that gets sent into the function
                    for execution purposes, and it goes in the parenthesis. In this example, our function has no parameters, so the parentheses remain empty. We
                    call greetWorld twice at the bottom of the snippet by typing its name with parentheses at the end. When it executes, it prints the line <code>Hello World!</code> to the console.
                </p>
                <br />
                <p className="Section-content">
                    Now let's look at a function that has parameters and returns data.
                </p>
                <div className="Example">
                    <h2>Example 2: Function Types and Parameters</h2>
                    <pre>
                        <code>
                            {`//Function Creation
static bool isValTen(int val){
    if(val == 10) {
        return true;
    }
    else {
        return false;
    }
}
    
//variable declaration
int num1 = 7;
int num2 = 10;

//Function Call
std::cout << isValTen(num1) << std::endl;
std::cout << isValTen(num2) << std::endl;`}
                        </code>
                    </pre>
                    <h2>Result:</h2>
                    <pre>
                        <code>
                            {`false
true`}
                        </code>
                    </pre>
                </div>
                <br />
                <p className="Section-content">
                    There are two main difference between this example and the last one: first, our return type is int instead of void, meaning the function
                    will return an integer when it finishes executing. Second, this function has a parameter where the last one had none. This can be seen in the
                    parentheses, where it reads <code>int val</code>. This means the function needs an integer as an input, and any operations that use the input can
                    reference it using the name <code>val</code>.
                </p>

                <div className="Centered-container">
                    <div className="Centered">
                        <div className="Bottom-buttons">
                            <Link to="/Cpp-Loops"><button className="Lesson-transition">Prev</button></Link>
                            <button className="Lesson-transition" onClick={() => handleCompleteLesson(100)}>Complete Lesson</button>
                            <Link to="/Cpp-Functions-Test"><button className="Lesson-transition">Exercises</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
