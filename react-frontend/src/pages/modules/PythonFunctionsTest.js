import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import axios from 'axios';

export default function PythonFunctionsTest() {
    const { user, progress, setProgress } = useContext(UserContext);

    const handleCompleteTest = async (score) => {
        try {
            const res = await axios.post('http://localhost:5000/api/progress/save', {
                module: 'PythonFunctionsTest',
                score,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setProgress((prevProgress) => [
                ...prevProgress.filter(p => p.module !== 'PythonFunctionsTest'),
                { module: 'PythonFunctionsTest', score, lastAccessed: new Date() }
            ]);
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    };

    const pythonTestProgress = progress.find(p => p.module === 'PythonFunctionsTest');

    return (
        <div className="App-container">
            <div className="Test-page">
                <a href="/Python-Functions"><button className="Test-return-button">Back</button></a>
                <h2 className="Section-header">Test Exercises: Functions</h2>
                <p className="Test-sub-header">Read the code snippets and answer below</p>
                <br />
                <div className="Example">
                    <p className="Test-question-title">Question 1:</p>
                    <div className="Spacing">
                        <pre>
                            <code>
                                {`def isEven(val):
    if val % 2 == 0:
        return true
    else:
        return false

print(isEven(12))`}
                            </code>
                        </pre>
                    </div>
                </div>
                <br />
                <p className="Section-content">What is the output?</p>
                <div className="Test-answer-bar">
                    <Q1 />
                </div>
                <br />

                <div className="Example">
                    <p className="Test-question-title">Question 2:</p>
                    <div className="Spacing">
                        <pre>
                            <code>
                                {`def doubleIt(val):
    return val * 2

num1 = 4
num2 = doubleIt(doubleIt(num1))

print(num2)`}
                            </code>
                        </pre>
                    </div>
                </div>
                <br />
                <p className="Section-content">What is the output?</p>
                <div className="Test-answer-bar">
                    <Q2 />
                </div>
                <br />

                <div className="Example">
                    <p className="Test-question-title">Question 3:</p>
                    <div className="Spacing">
                        <pre>
                            <code>
                                {`def equation(a, b, c):
    if b % 2 == 0:
        return a + b + c
    else:
        return a * b * c

print(equation(3,1,5))`}
                            </code>
                        </pre>
                    </div>
                </div>
                <br />
                <p className="Section-content">What is the output?</p>
                <div className="Test-answer-bar">
                    <Q3 />
                </div>
                <br />

                <div className="Centered-container">
                    <div className="Centered">
                        <div className="Bottom-buttons">
                            <button className="Lesson-transition" onClick={() => handleCompleteTest(100)}>Finish</button>
                        </div>
                    </div>
                </div>
                {pythonTestProgress && (
                    <div className="Section-content">
                        <h2>Your Progress</h2>
                        <p>Score: {pythonTestProgress.score}</p>
                        <p>Last Accessed: {new Date(pythonTestProgress.lastAccessed).toLocaleString()}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

function Q1() {
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');

    //Event handler for input changes
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    //Function to validate the input
    const validateInput = () => {
        if (inputValue === 'true') {
            setMessage('Correct!');
        } else {
            setMessage('Answer is incorrect. Please try again.');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter value"
                className="Test-answer"
            />
            <button className="Test-answer-button" onClick={validateInput}>Check</button>
            <p>{message}</p>
        </div>
    );
}

function Q2() {
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');

    //Event handler for input changes
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    //Function to validate the input
    const validateInput = () => {
        if (inputValue === '16') {
            setMessage('Correct!');
        } else {
            setMessage('Answer is incorrect. Please try again.');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter value"
                className="Test-answer"
            />
            <button className="Test-answer-button" onClick={validateInput}>Check</button>
            <p>{message}</p>
        </div>
    );
}

function Q3() {
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');

    //Event handler for input changes
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    //Function to validate the input
    const validateInput = () => {
        if (inputValue === '15') {
            setMessage('Correct!');
        } else {
            setMessage('Answer is incorrect. Please try again.');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter value"
                className="Test-answer"
            />
            <button className="Test-answer-button" onClick={validateInput}>Check</button>
            <p>{message}</p>
        </div>
    );
}
