import React, { useContext, useState } from 'react';

export default function CppVarsTest() {

    return (
        <div class="App-container">
            <div class="Test-page">
                <a href="/Cpp-Variables"><button class="Test-return-button">Back</button></a>
                <h2 class="Section-header">Test Exercises: Variables</h2>
                <p class="Test-sub-header">Read the code snippets and answer below</p>
                <br />
                <div className="Example">
                    <p class="Test-question-title">Question 1:</p>
                    <div class="Spacing">
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
                <p class="Section-content">What is the output?</p>
                <div class="Test-answer-bar">
                    <Q1 />
                </div>
                <br />

                <div className="Example">
                    <p class="Test-question-title">Question 2:</p>
                    <div class="Spacing">
                        <pre>
                            <code>
                                {`String apples = "12";
String bananas = "16"

String fruits = apples + bananas;

std::cout<<fruits<<std::endl;`}
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
                                {`float val1 = 10;
float val2 = 40
float val3 = val2 / val1;
float val4 = val1 + val2 + val3;

std::cout<<val4<<std::endl`}
                            </code>
                        </pre>
                    </div>
                </div>
                <br />
                <p class="Section-content">What is the output?</p>
                <div class="Test-answer-bar">
                    <Q3 />
                </div>




                <div class="Centered-container">
                    <div class="Centered">
                        <div class="Bottom-buttons">
                            <a href="/Cpp-Loops"><button class="Lesson-transition">Continue</button></a>
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
                class="Test-answer"
            />
            <button class="Test-answer-button" onClick={validateInput}>Check</button>
            <p>{message}</p>
        </div>
    );
}