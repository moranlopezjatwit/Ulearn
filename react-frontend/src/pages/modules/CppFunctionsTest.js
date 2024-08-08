import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import axios from 'axios';

export default function CppFunctionsTest() {
    const { user, progress, setProgress } = useContext(UserContext);

    const handleCompleteTest = async (score) => {
        try {
            const res = await axios.post('http://localhost:5000/api/progress/save', {
                module: 'CppFunctionsTest',
                score,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setProgress((prevProgress) => [
                ...prevProgress.filter(p => p.module !== 'CppFunctionsTest'),
                { module: 'CppFunctionsTest', score, lastAccessed: new Date() }
            ]);
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    };

    const cppTestProgress = progress.find(p => p.module === 'CppFunctionsTest');

    return (
        <div className="App-container">
            <div className="Test-page">
                <a href="/Cpp-Functions"><button className="Test-return-button">Back</button></a>
                <h2 className="Section-header">Test Exercises: Functions</h2>
                <p className="Test-sub-header">Read the code snippets and answer below</p>
                <br />
                <div className="Example">
                    <p className="Test-question-title">Question 1:</p>
                    <div className="Spacing">
                        <pre>
                            <code>
                                {`void doubleVar(int var) {
    var = var * 2;
}

int val = 5;
doubleVar(val)
doubleVar(val);

std::cout<<val<<std::endl;`}
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
                                {`static bool isOdd(int val){
    if(val % 2 == 1) {
        return true;
    }
    else{
        return false;
    }
 }

 std::cout<<isOdd(15)<<std::endl;

 `}
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
                                {`void printVal(int numTimes){
    for(int i = 0; i < numTimes; i++){
        std::cout<<"2";
    }
}

int val = 5;

printVal(val);`}
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
                {cppTestProgress && (
                    <div className="Section-content">
                        <h2>Your Progress</h2>
                        <p>Score: {cppTestProgress.score}</p>
                        <p>Last Accessed: {new Date(cppTestProgress.lastAccessed).toLocaleString()}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

function Q1() {
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const validateInput = () => {
        if (inputValue === '5') {
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

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

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

function Q3() {
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const validateInput = () => {
        if (inputValue === '22222') {
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
