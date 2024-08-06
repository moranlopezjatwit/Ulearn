import React, { useContext, useState } from 'react';

export default function JavaFunctionsTest() {
    return (
        <div class="App-container">
            <div class="Test-page">
                <a href="/Java-Functions"><button class="Test-return-button">Back</button></a>
                <h2 class="Section-header">Test Exercises: Functions</h2>
                <p class="Test-sub-header">Read the code snippets and answer below</p>
                <br />
                <div className="Example">
                    <p class="Test-question-title">Question 1:</p>
                    <div class="Spacing">
                    <pre>
                        <code>
                            {`public class Main {
    static int plusOne(int val){
        return val + 1;
    }

    static int retOne(int val){
        return 1;
    }
}

public static void main(String[] args){
    
    int num1 = 12;
    int num2 = retOne(plusOne(num1));

    System.out.println(num2);
}`}
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
                                {`public class Main {
    static bool isEven(int val){
        if(val % 2 == 0) {
            return true;
        }
        else{
            return false;
        }
    }
}

public static void main(String[] args){
    
    int testVal = 0;

    for(int i = 0; i < 15; i++) {
        testVal++;

        if(isEven(testVal)) {
            System.out.println("VALUE IS EVEN");
        }
    }
}`}
                            </code>
                        </pre>
                    </div>
                </div>
                <br />
                <p class="Section-content">How many times is 'VALUE IS EVEN' printed?</p>
                <div class="Test-answer-bar">
                    <Q2 />
                </div>
                <br />

                <div className="Example">
                    <p class="Test-question-title">Question 3:</p>
                    <div class="Spacing">
                        <pre>
                            <code>
                                {`public class Main {
    static void strangeFunc(int val){
        if(val == 15) {
            val = 0;
        }
        else{
            val += 2;
        }
    }
}

public static void main(String[] args){
    
    int num = 1;

    for(int i = 0; i < 15; i++) {
        strangeFunc(num);
    }
}`}
                            </code>
                        </pre>
                    </div>
                </div>
                <br />
                <p class="Section-content">What is the final value of num?</p>
                <div class="Test-answer-bar">
                    <Q3 />
                </div>
                <br />


                <div class="Centered-container">
                    <div class="Centered">
                        <div class="Bottom-buttons">
                            <a href="/Java-Modules"><button class="Lesson-transition">Finish</button></a>
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
        if (inputValue === '1') {
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
        if (inputValue === '7') {
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
        if (inputValue === '14') {
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