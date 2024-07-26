import React, { useContext } from 'react';

export default function PythonFunctionsTest() {
    return (
        <div class="App-container">
            <div class="Test-page">
                <a href="/Python-Functions"><button class="Test-return-button">Back</button></a>
                <h2 class="Section-header">Test Exercises: Functions</h2>
                <p class="Test-sub-header">Read the code snippets and answer below</p>
                <br />
                <div className="Example">
                    <p class="Test-question-title">Question 1:</p>
                    <div class="Spacing">
                        <pre>
                            <code>
                                {`def isEven(val)
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
                <p class="Section-content">What is the output?</p>
                <div class="Test-answer-bar">
                    <input type="text" value="" class="Test-answer" id="pFunc1" placeholder="Answer Here..." maxlength="8" minlength="1" />
                    <button id="tbutton" type="submit" class="Test-answer-button">Check</button>
                </div>
                <br />

                <div className="Example">
                    <p class="Test-question-title">Question 2:</p>
                    <div class="Spacing">
                        <pre>
                            <code>
                                {`def doubleIt(val)
    val *= 2

num1 = 4
num2 = doubleIt(doubleIt(num))

print(num2)
`}
                            </code>
                        </pre>
                    </div>
                </div>
                <br />
                <p class="Section-content">What is the output?</p>
                <div class="Test-answer-bar">
                    <input type="text" value="" class="Test-answer" id="pFunc2" placeholder="Answer Here..." maxlength="8" minlength="1" />
                    <button id="tbutton" type="submit" class="Test-answer-button">Check</button>
                </div>
                <br />

                <div className="Example">
                    <p class="Test-question-title">Question 3:</p>
                    <div class="Spacing">
                        <pre>
                            <code>
                                {`def equation(a, b, c)
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
                <p class="Section-content">What is the output?</p>
                <div class="Test-answer-bar">
                    <input type="text" value="" class="Test-answer" id="pFunc3" placeholder="Answer Here..." maxlength="8" minlength="1" />
                    <button id="tbutton" type="submit" class="Test-answer-button">Check</button>
                </div>
                <br />


                <div class="Centered-container">
                    <div class="Centered">
                        <div class="Bottom-buttons">
                            <a href="/Python-Modules"><button class="Lesson-transition">Finish</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}