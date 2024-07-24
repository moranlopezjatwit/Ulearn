import React, { useContext } from 'react';

export default function CppFunctionsTest() {
    return (
        <div class="App-container">
            <div class="Test-page">
                <a href="/Cpp-Functions"><button class="Test-return-button">Back</button></a>
                <h2 class="Section-header">Test Exercises: Functions</h2>
                <p class="Test-sub-header">Read the code snippets and answer below</p>
                <br />
                <div className="Example">
                    <p class="Test-question-title">Question 1:</p>
                    <div class="Spacing">
                        <pre>
                            <code>
                                {`void doubleVar(int var) {
    var = var * 2;
}

int val = 5;
doubleVar(val)
doubleVar(val);

std::cout<<val<<std::endl;`}
                            </code>
                        </pre>
                    </div>
                </div>
                <br />
                <p class="Section-content">What is the output?</p>
                <div class="Test-answer-bar">
                    <input type="text" value="" class="Test-answer" id="CppFunc1" placeholder="Answer Here..." maxlength="8" minlength="1" />
                    <button id="tbutton" type="submit" class="Test-answer-button">Check</button>
                </div>
                <br />

                <div className="Example">
                    <p class="Test-question-title">Question 2:</p>
                    <div class="Spacing">
                        <pre>
                            <code>
                                {`static bool isOdd(int val){
    if(val % 2 == 1) {
        return true;
    }
    else{
        return false;
    }
 }

 std::cout<<isOdd(15)<<std::endl;

 `}
                            </code>
                        </pre>
                    </div>
                </div>
                <br />
                <p class="Section-content">What is the output?</p>
                <div class="Test-answer-bar">
                    <input type="text" value="" class="Test-answer" id="CppFunc2" placeholder="Answer Here..." maxlength="8" minlength="1" />
                    <button id="tbutton" type="submit" class="Test-answer-button">Check</button>
                </div>
                <br />

                <div className="Example">
                    <p class="Test-question-title">Question 3:</p>
                    <div class="Spacing">
                        <pre>
                            <code>
                                {`void printVal(int numTimes){
    for(int i = 0; i < numTimes; i++){
        std::cout<<"2";
    }
}

int val = 5;

printVal(val);`}
                            </code>
                        </pre>
                    </div>
                </div>
                <br />
                <p class="Section-content">What is the output?</p>
                <div class="Test-answer-bar">
                    <input type="text" value="" class="Test-answer" id="CppFunc3" placeholder="Answer Here..." maxlength="8" minlength="1" />
                    <button id="tbutton" type="submit" class="Test-answer-button">Check</button>
                </div>
                <br />


                <div class="Centered-container">
                    <div class="Centered">
                        <div class="Bottom-buttons">
                            <a href="/Cpp-Modules"><button class="Lesson-transition">Finish</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}