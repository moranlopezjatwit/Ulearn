import React, { useContext } from 'react';

export default function JavaVarsTest() {

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
                            {`int a = 7;
int b = 3;
int c = b - a;

int d = a + b + c;

System.out.println(d);`}
                        </code>
                        </pre>
                    </div>
                </div>
                <br />
                <p class="Section-content">What is the output?</p>
                <div class="Test-answer-bar">
                        <input type="text" value = "" class="Test-answer" id="jVar1" placeholder="Answer Here..." maxlength="8" minlength="1"/>
                    <button id="tbutton" type="submit" class="Test-answer-button">Check</button>
                </div>
                <br />

                <div className="Example">
                    <p class="Test-question-title">Question 2:</p>
                    <div class="Spacing">
                        <pre>
                            <code>
                                {`String val1 = "90";
String val2 = "15"

String val3 = val1 + val2;

System.out.println(val3);`}
                            </code>
                        </pre>
                    </div>
                </div>
                <br />
                <p class="Section-content">What is the output?</p>
                <div class="Test-answer-bar">
                    <input type="text" value="" class="Test-answer" id="jVar2" placeholder="Answer Here..." maxlength="8" minlength="1" />
                    <button id="tbutton" type="submit" class="Test-answer-button">Check</button>
                </div>

                <div className="Example">
                    <p class="Test-question-title">Question 3:</p>
                    <div class="Spacing">
                        <pre>
                            <code>
                                {`int oranges = 10;
int apples = 12;
int bananas = 15;

apples += bananas;
oranges = apples;

bananas += apples + oranges;

System.out.println(bananas);`}
                            </code>
                        </pre>
                    </div>
                </div>
                <br />
                <p class="Section-content">What is the output?</p>
                <div class="Test-answer-bar">
                    <input type="text" value="" class="Test-answer" id="jVar3" placeholder="Answer Here..." maxlength="8" minlength="1" />
                    <button id="tbutton" type="submit" class="Test-answer-button">Check</button>
                </div>




                <div class="Centered-container">
                    <div class="Centered">
                        <div class="Bottom-buttons">
                            <a href="/Java-Loops"><button class="Lesson-transition">Continue</button></a>
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