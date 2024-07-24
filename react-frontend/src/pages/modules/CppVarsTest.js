import React, { useContext } from 'react';

export default function CppVarsTest() {

    return (
        <div class="App-container">
            <div class="Test-page">
                <a href="/Java-Variables"><button class="Test-return-button">Back</button></a>
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
                    <input type="text" value="" class="Test-answer" id="CppVar1" placeholder="Answer Here..." maxlength="8" minlength="1" />
                    <button id="tbutton" type="submit" class="Test-answer-button">Check</button>
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
                    <input type="text" value="" class="Test-answer" id="CppVar2" placeholder="Answer Here..." maxlength="8" minlength="1" />
                    <button id="tbutton" type="submit" class="Test-answer-button">Check</button>
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
                    <input type="text" value="" class="Test-answer" id="CppVar3" placeholder="Answer Here..." maxlength="8" minlength="1" />
                    <button id="tbutton" type="submit" class="Test-answer-button">Check</button>
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

/*
//var declaration
var ans1 = document.getElementById("jVar1");

function readAnswer(elem, correctans) {
    if (ans == "") {
        document.getElementById(elem).placeholder.value = "Must Submit an Answer";
    }
    else {
        var ans = document.getElementById(jVar1).value;
        if (ans.value != correctans) {
            //incorrect entry
        }
        else {
            //correct entry
        }
    }
    ans1.placeholder = "TEST";
}
*/