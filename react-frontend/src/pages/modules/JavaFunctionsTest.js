import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import axios from 'axios';

export default function JavaFunctionsTest() {
    const { user, progress, setProgress } = useContext(UserContext);

    const handleCompleteTest = async (score) => {
        try {
            const res = await axios.post('http://localhost:5000/api/progress/save', {
                module: 'JavaFunctionsTest',
                score,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setProgress((prevProgress) => [
                ...prevProgress.filter(p => p.module !== 'JavaFunctionsTest'),
                { module: 'JavaFunctionsTest', score, lastAccessed: new Date() }
            ]);
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    };

    const javaTestProgress = progress.find(p => p.module === 'JavaFunctionsTest');

    return (
        <div className="App-container">
            <div className="Test-page">
                <a href="/Java-Functions"><button className="Test-return-button">Back</button></a>
                <h2 className="Section-header">Test Exercises: Functions</h2>
                <p className="Test-sub-header">Read the code snippets and answer below</p>
                <br />
                <div className="Example">
                    <p className="Test-question-title">Question 1:</p>
                    <div className="Spacing">
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
                <p className="Section-content">How many times is 'VALUE IS EVEN' printed?</p>
                <div className="Test-answer-bar">
                    <Q2 />
                </div>
                <br />

                <div className="Example">
                    <p className="Test-question-title">Question 3:</p>
                    <div className="Spacing">
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
                <p className="Section-content">What is the final value of num?</p>
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
                {javaTestProgress && (
                    <div className="Section-content">
                        <h2>Your Progress</h2>
                        <p>Score: {javaTestProgress.score}</p>
                        <p>Last Accessed: {new Date(javaTestProgress.lastAccessed).toLocaleString()}</p>
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
                className="Test-answer"
            />
            <button className="Test-answer-button" onClick={validateInput}>Check</button>
            <p>{message}</p>
        </div>
    );
}
