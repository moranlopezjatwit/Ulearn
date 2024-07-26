import React, { useContext } from 'react';

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
for fruit in fruits:
    numTrees++`}
                            </code>
                        </pre>
                    </div>
                </div>
                <br />
                <p class="Section-content">What is the final value of numTrees</p>
                <div class="Test-answer-bar">
                    <input type="text" value="" class="Test-answer" id="pLoop1" placeholder="Answer Here..." maxlength="8" minlength="1" />
                    <button id="tbutton" type="submit" class="Test-answer-button">Check</button>
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
                    <input type="text" value="" class="Test-answer" id="pLoop2" placeholder="Answer Here..." maxlength="8" minlength="1" />
                    <button id="tbutton" type="submit" class="Test-answer-button">Check</button>
                </div>

                <div className="Example">
                    <p class="Test-question-title">Question 3:</p>
                    <div class="Spacing">
                        <pre>
                            <code>
                                {`total = 0;
for i in range(5):
    for j in range(5):
        total += i + j;`}
                            </code>
                        </pre>
                    </div>
                </div>
                <br />
                <p class="Section-content">What is the final value of total?</p>
                <div class="Test-answer-bar">
                    <input type="text" value="" class="Test-answer" id="pLoop3" placeholder="Answer Here..." maxlength="8" minlength="1" />
                    <button id="tbutton" type="submit" class="Test-answer-button">Check</button>
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