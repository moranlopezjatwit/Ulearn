import React from 'react';
import { Link } from 'react-router-dom';
import JavaSidenav from '../../Controls/JavaSidenav';

export default function PythonLoops() {
    return (
        <div className="java-loops"> {/* Replace id with className */}
            <JavaSidenav />
            <div>
                <h1 className="Section-header">If Statements & Loop logic</h1>
                <p className="Section-content">
                    Just as with variables, logic is another foundational piece to any programming language. There are three main conditional statements for 
                    Java that we will be going over: <div className="Bold-word">if statements</div>, <div className="Bold-word">for loops</div>, and <div className="Bold-word"> while loops</div>.
                    Each of these conditionals have their own advantages and use cases, but the majority of complex software ends up making use of all three. By the end 
                    of this lesson, you will have a basic familiarity with these conditionals, and you will have a good sense for when each of them should be used while
                    coding.
                </p>
                <br />
                <p className="Section-content">
                    Let's begin by looking at if statements. These are statements that check if a given parameter is true before executing the code they hold. If the
                    parameter is not true, their code never executes. Additionally, and if statement can also have an else statement with alternative code that will
                    execute instead of the original code if the parameter is not true.
                </p>
                <div className="Example">
                    <h2>Example 1: </h2>
                    <pre>
                        <code>
                            {`# Variable declaration
int numPeople = 5;
int numApples  = 7;

bool enoughApples;


if(numApples >= numPeople) {
    enoughApples = true;
}
else {
    enoughApples = false;
}

# Printing variables
System.out.println(enoughApples);`}
                        </code>
                    </pre>
                    <h2>Result:</h2>
                    <pre>
                        <code>
                            {`true`}
                        </code>
                    </pre>

                </div>
            </div>
        </div>
    );
}