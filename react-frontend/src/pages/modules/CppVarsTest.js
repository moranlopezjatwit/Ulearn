import React, { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function CppVarsTest() {
    const { user, setProgress } = useContext(UserContext);
    const navigate = useNavigate();

    const saveProgress = async () => {
        const moduleScore = 50; // Example score for this module

        try {
            const res = await axios.post('http://localhost:5000/api/progress/save', {
                module: 'CppVarsTest',
                score: moduleScore,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setProgress((prevProgress) => [
                ...prevProgress.filter(p => p.module !== 'CppVarsTest'),
                { module: 'CppVarsTest', score: moduleScore, lastAccessed: new Date() }
            ]);
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    };

    const handleContinue = async () => {
        await saveProgress();
        navigate('/Cpp-Loops'); // Redirect to the next lesson
    };

    return (
        <div className="App-container">
            <div className="Test-page">
                <a href="/Cpp-Variables"><button className="Test-return-button">Back</button></a>
                <h2 className="Section-header">Test Exercises: Variables</h2>
                <p className="Test-sub-header">Read the code snippets and answer below</p>
                <br />
                <div className="Example">
                    <p className="Test-question-title">Question 1:</p>
                    <div className="Spacing">
                        <pre>
                            <code>
                                {`int shirts = 20;
int pants = 15; 
int shoes = 30;

int clothes = shirts + pants + shoes;

std::cout<<clothes<<std::endl;`}
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
                                {`String apples = "12";
String bananas = "16";

String fruits = apples + bananas;

std::cout<<fruits<<std::endl;`}
                            </code>
                        </pre>
                    </div>
                </div>
                <br />
                <p className="Section-content">What is the output?</p>
                <div className="Test-answer-bar">
                    <Q2 />
                </div>

                <div className="Example">
                    <p className="Test-question-title">Question 3:</p>
                    <div className="Spacing">
                        <pre>
                            <code>
                                {`float val1 = 10;
float val2 = 40;
float val3 = val2 / val1;
float val4 = val1 + val2 + val3;

std::cout<<val4<<std::endl`}
                            </code>
                        </pre>
                    </div>
                </div>
                <br />
                <p className="Section-content">What is the output?</p>
                <div className="Test-answer-bar">
                    <Q3 />
                </div>

                <div className="Centered-container">
                    <div className="Centered">
                        <div className="Bottom-buttons">
                            <button onClick={handleContinue} className="Lesson-transition">Continue</button>
                        </div>
                    </div>
                </div>
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
        if (inputValue === '65') {
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
        if (inputValue === '1216') {
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
        if (inputValue === '54') {
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
