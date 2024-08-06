import React, { useContext, useState } from 'react';

export default function PythonLoopsTest() {
    return (
        <div class="App-container">
            <div class="Test-page">
                <a href="/Python-Loops"><button class="Test-return-button">Back</button></a>
                <h2 class="Section-header">Test Exercises: Conditions & Loops</h2>
                <p class="Test-sub-header">Read the code snippets and answer below</p>
                <br />
                <div className="Example">
                    <p class="Test-question-title">Question 1:</p>
                    <div class="Spacing">
                        <pre>
                            <code>
                                {`trees = ["pine", "oak", "spruce"]
numTrees = 0
for tree in trees:
    numTrees++`}
                            </code>
                        </pre>
                    </div>
                </div>
                <br />
                <p class="Section-content">What is the final value of numTrees</p>
                <div class="Test-answer-bar">
                    <Q1 />
                </div>
                <br />

                <div className="Example">
                    <p class="Test-question-title">Question 2:</p>
                    <div class="Spacing">
                        <pre>
                            <code>
                                {`apples = 10
evenCount = 0;
while apples > 0:
    apples -= 1
    if apples % 2 == 0:
        evenCount++

print(evenCount)`}
                            </code>
                        </pre>
                    </div>
                </div>
                <br />
                <p class="Section-content">What is the output?</p>
                <div class="Test-answer-bar">
                    <Q2 />
                </div>

                <div className="Example">
                    <p class="Test-question-title">Question 3:</p>
                    <div class="Spacing">
                        <pre>
                            <code>
                                {`total = 0;
for i in range(2):
    for j in range(5):
        total += i + j;`}
                            </code>
                        </pre>
                    </div>
                </div>
                <br />
                <p class="Section-content">What is the final value of total?</p>
                <div class="Test-answer-bar">
                    <Q3 />
                </div>

                <div class="Centered-container">
                    <div class="Centered">
                        <div class="Bottom-buttons">
                            <a href="/Python-Functions"><button class="Lesson-transition">Continue</button></a>
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

    //Event handler for input changes
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    //Function to validate the input
    const validateInput = () => {
        if (inputValue === '3') {
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
                class="Test-answer"
            />
            <button class="Test-answer-button" onClick={validateInput}>Check</button>
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
                class="Test-answer"
            />
            <button class="Test-answer-button" onClick={validateInput}>Check</button>
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
        if (inputValue === '25') {
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
                class="Test-answer"
            />
            <button class="Test-answer-button" onClick={validateInput}>Check</button>
            <p>{message}</p>
        </div>
    );
}