import React, { useContext } from 'react';

export default function JavaLoopsTest() {
    return (
        <div class="App-container">
            <div class="Test-page">
                <a href="/Java-Loops"><button class="Test-return-button">Back</button></a>
                <h2 class="Section-header">Test Exercises: Conditions & Loops</h2>
                <p class="Test-sub-header">Read the code snippets and answer below</p>
                <br />
                <div className="Example">
                    <p class="Test-question-title">Question 1:</p>
                    <div class="Spacing">
                        <pre>
                            <code>
                                {`bool dinnerTime  = false;
int hour = 0;

while(hour != 17) {
    hour++
    if(hour == 17) {
        dinnerTime = true;
    }
    else {
        console.out.println("Not Hungry");
    }
}`}
                            </code>
                        </pre>
                    </div>
                </div>
                <br />
                <p class="Section-content">How many times is "Not Hungry" printed?</p>
                <div class="Test-answer-bar">
                    <input type="text" value="" class="Test-answer" id="jLoop1" placeholder="Answer Here..." maxlength="8" minlength="1" />
                    <button id="tbutton" type="submit" class="Test-answer-button">Check</button>
                </div>
                <br />

                <div className="Example">
                    <p class="Test-question-title">Question 2:</p>
                    <div class="Spacing">
                        <pre>
                            <code>
                                {`int trees = 0;
bool forest = false;

for(int i = 0; i < 15; i++) {
    trees++
    if(trees == 15) {
        forest = true;
    }
}

console.out.println(forest);`}
                            </code>
                        </pre>
                    </div>
                </div>
                <br />
                <p class="Section-content">What is the output?</p>
                <div class="Test-answer-bar">
                    <input type="text" value="" class="Test-answer" id="jLoop2" placeholder="Answer Here..." maxlength="8" minlength="1" />
                    <button id="tbutton" type="submit" class="Test-answer-button">Check</button>
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
                    <input type="text" value="" class="Test-answer" id="jLoop3" placeholder="Answer Here..." maxlength="8" minlength="1" />
                    <button id="tbutton" type="submit" class="Test-answer-button">Check</button>
                </div>

                <div class="Centered-container">
                    <div class="Centered">
                        <div class="Bottom-buttons">
                            <a href="/Java-Functions"><button class="Lesson-transition">Continue</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}