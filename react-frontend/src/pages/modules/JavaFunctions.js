import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import JavaSidenav from '../../Controls/JavaSidenav';

export default function PythonFunctions() {
    const { user, setProgress } = useContext(UserContext);
    const navigate = useNavigate();

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

    const completeModule = () => {
        saveProgress();
        navigate('/Java-Modules'); // Redirect to the modules page after saving progress
    };

    return (
        <div className="java-functions"> {/* Replace id with className */}
            <JavaSidenav />
            <div>
                <h1 className="Section-header">Functions</h1>
                <p className="Section-content">Functions in Java are blocks of code that can be reused to execute a specific operation. This is helpful for organizing
                code and reducing time spent completing a program. Look at the example below to see the architecture of a Java function.
                </p>
                <br />
                <div className="Example">
                    <h2>Example 1: Function Creation and calling</h2>
                    <pre>
                        <code>
                            {`public class Main {

    //Function Creation
    static void firstFunction(){
        console.out.println("This is my first function!");
    }
}

public static void main(String[] args){

    //Function Call
    firstFunction();
}`}
                        </code>
                    </pre>
                    <h2>Result:</h2>
                    <pre>
                        <code>
                            {`This is my first function!`}
                        </code>
                    </pre>
                </div>
                <br />
                <p className="Section-content">
                    While this code may look confusing, keep in mind that the two parts labelled main are structural pieces of the program rather than operations. Let's
                    Focus on the components that make up firstFunction. first is the <div className="Bold-word">scope</div>, which defines what parts of the program are allowed
                    to view and work with the function. Here, the scope is <code>static</code>, and it means that the function can be viewed by anything within the main function.
                    Second is the <div className="Bold-word">return type</div>, which defines what data type the function will return when it finishes executing. This function's
                    return type is <code>void</code>, which means it executes its code without returning any data. Finally are the <div className="Bold-word">parameters</div> of the function.
                    This is data that gets sent into the function for execution, and it goes in the parenthesis. In this example, our function has no parameters. We call
                    firstFunction at the bottom of the snippet by typing its name with parentheses at the end. When it executes, it prints the line <code>This is my first function!</code> to the console.
                </p>
                <br />
                <p className="Section-content">
                Now let's look at a function that has parameters and returns data.
                </p>

                <div className="Example">
                    <h2>Example 2: Function Types and Parameters</h2>
                    <pre>
                        <code>
                            {`public class Main {

    //Function Creation
    static int doubleValue(int val){
        return val * 2;
    }
}

public static void main(String[] args){
    
    //variable declaration
    int num = 7;
    int newNum = doubleValue(num);

    //Function Call
    System.out.println("newNum Value: " + newNum);
}`}
                        </code>
                    </pre>
                    <h2>Result:</h2>
                    <pre>
                        <code>
                            {`newNum Value: 14`}
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
                <br />
                <div className="Centered-container">
                    <div className="Centered">
                        <div className="Bottom-buttons">
                            <Link to="/Java-Loops"><button className="Lesson-transition">Prev</button></Link>
                            <Link to="/Java-Functions-Test"><button className="Lesson-transition">Exercises</button></Link>
                            <button className="Hidden-button"></button>
                        </div>
                    </div>
                    <div className="Centered">
                        <button className="Complete-module" onClick={completeModule}>Complete Module</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

