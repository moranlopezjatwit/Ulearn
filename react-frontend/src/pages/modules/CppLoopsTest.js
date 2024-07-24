import React, { useContext } from 'react';

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
                                {`bool hourOfDay = 16;
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
                    <input type="text" value="" class="Test-answer" id="CppLoop1" placeholder="Answer Here..." maxlength="8" minlength="1" />
                    <button id="tbutton" type="submit" class="Test-answer-button">Check</button>
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
                <p class="Section-content">What is the output?</p>
                <div class="Test-answer-bar">
                    <input type="text" value="" class="Test-answer" id="CppLoop2" placeholder="Answer Here..." maxlength="8" minlength="1" />
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
                    <input type="text" value="" class="Test-answer" id="CppLoop3" placeholder="Answer Here..." maxlength="8" minlength="1" />
                    <button id="tbutton" type="submit" class="Test-answer-button">Check</button>
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