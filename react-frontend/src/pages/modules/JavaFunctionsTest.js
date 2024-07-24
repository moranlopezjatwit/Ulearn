import React, { useContext } from 'react';

export default function JavaFunctionsTest() {
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
                    <input type="text" value="" class="Test-answer" id="jFunc1" placeholder="Answer Here..." maxlength="8" minlength="1" />
                    <button id="tbutton" type="submit" class="Test-answer-button">Check</button>
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
                    <input type="text" value="" class="Test-answer" id="jFunc2" placeholder="Answer Here..." maxlength="8" minlength="1" />
                    <button id="tbutton" type="submit" class="Test-answer-button">Check</button>
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
                    <input type="text" value="" class="Test-answer" id="jFunc3" placeholder="Answer Here..." maxlength="8" minlength="1" />
                    <button id="tbutton" type="submit" class="Test-answer-button">Check</button>
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