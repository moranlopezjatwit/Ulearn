import React, { useContext, useState } from 'react';

export default function CppLoopsTest() {
    return (
        <div class="App-container">
            <div class="Test-page">
                <a href="/Cpp-Loops"><button class="Test-return-button">Back</button></a>
                <h2 class="Section-header">Test Exercises: Conditions & Loops</h2>
                <p class="Test-sub-header">Read the code snippets and answer below</p>
                <br />
                <div className="Example">
                    <p class="Test-question-title">Question 1:</p>
                    <div class="Spacing">
                        <pre>
                            <code>
                                {`int hourOfDay = 16;
bool nighttime;

if(hourOfDay > 20) {
    nighttime = true;
}
else {
    nighttime = false;
}

std::cout<<nighttime<<std::endl;`}
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
                                {`int sandGrains = 0;

bool sandPile = false;

for(int i = 0; i < 100; i++) {

    if(i % 2 == 0) {
        sandGrains++;
    }

    if(sandGrain >= 70){
        sandPile = true;
    }
}`}
                            </code>
                        </pre>
                    </div>
                </div>
                <br />
                <p class="Section-content">What is the value of sandPile?</p>
                <div class="Test-answer-bar">
                    <Q2 />
                </div>

                <div className="Example">
                    <p class="Test-question-title">Question 3:</p>
                    <div class="Spacing">
                        <pre>
                            <code>
                                {`String greeting = Hello;
int start = 3;
int end = 10;

while(start < end) {
    start++
    greeting += "o";
}`}
                            </code>
                        </pre>
                    </div>
                </div>
                <br />
                <p class="Section-content">How many characters are in the variable 'greeting' after execution?</p>
                <div class="Test-answer-bar">
                    <Q3 />
                </div>

                <div class="Centered-container">
                    <div class="Centered">
                        <div class="Bottom-buttons">
                            <a href="/Cpp-Functions"><button class="Lesson-transition">Continue</button></a>
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
        if (inputValue === 'false') {
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
        if (inputValue === 'false') {
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
        if (inputValue === '12') {
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